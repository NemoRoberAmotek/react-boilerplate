import {
  screen,
  render,
  act,
  fireEvent,
  queryByAttribute
} from '@testing-library/react'
import '@testing-library/jest-dom'
import Breeds from '../pages/Breeds'
import { createFactoryList } from './factories'
import breedFactory from './factories/breed'

process.env.REACT_APP_PROXY_ROOT_PATH = 'http://test-server-proxy/api'

let fetchMock: undefined | jest.Mock

const scrollToMock = jest.fn()

window.scrollTo = scrollToMock

const getByAriaLabel = queryByAttribute.bind(null, 'aria-label')

const renderPage = async () => {
  return await act(() => render(<Breeds />))
}

const breeds = createFactoryList(breedFactory, 13)

beforeEach(() => {
  fetchMock = jest.fn().mockImplementation(
    jest.fn(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(breeds)
      })
    })
  )

  global.fetch = fetchMock
})

it('makes a request to the server for 12 breeds, starting from page 0', async () => {
  await renderPage()

  expect(fetchMock).toHaveBeenCalledWith(
    'http://test-server-proxy/api/breeds?limit=12&page=0'
  )
})

it('displays the breed names', async () => {
  await renderPage()

  expect(await screen.findByText(breeds[0].name!)).toBeInTheDocument()
})

describe('when another page was selected', () => {
  it('makes a request for that page', async () => {
    const { container } = await renderPage()

    const secondPageButton = await getByAriaLabel(container, 'Go to page 2')

    await act(() => fireEvent.click(secondPageButton as HTMLElement))

    expect(fetchMock).toHaveBeenCalledWith(
      'http://test-server-proxy/api/breeds?limit=12&page=1'
    )
  })

  it('scrolls to the top of the page', async () => {
    const { container } = await renderPage()

    const secondPageButton = await getByAriaLabel(container, 'Go to page 2')

    await act(() => fireEvent.click(secondPageButton as HTMLElement))

    expect(scrollToMock).toHaveBeenCalledWith({ behavior: 'smooth', top: 0 })
  })
})
