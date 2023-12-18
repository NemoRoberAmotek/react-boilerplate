import { screen, render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Breeds from '../pages/Breeds'

process.env.REACT_APP_PROXY_ROOT_PATH = 'http://test-server-proxy/api'

let fetchMock: undefined | jest.Mock

const renderPage = async () => {
  await act(() => render(<Breeds />))
}

beforeEach(() => {
  fetchMock = jest.fn().mockImplementation(
    jest.fn(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: 'Labrador'
            },
            {
              id: 2,
              name: 'Cavalier King Charles Spaniel'
            }
          ])
      })
    })
  )

  global.fetch = fetchMock
})

it('makes a request to the server for 10 breeds, starting from page 1', async () => {
  await renderPage()

  expect(fetchMock).toHaveBeenCalledWith(
    'http://test-server-proxy/api/breeds?limit=10&page=1'
  )
})

it('displays the breed names', async () => {
  await renderPage()

  expect(await screen.findByText('Labrador')).toBeInTheDocument()
  expect(
    await screen.findByText('Cavalier King Charles Spaniel')
  ).toBeInTheDocument()
})
