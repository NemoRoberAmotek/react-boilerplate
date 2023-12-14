import { screen, render } from '@testing-library/react'
import Routes from '../Routes'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

jest.mock(
  '../pages/Index',
  () =>
    function indexMock() {
      return <div data-testid='index-page'>Index</div>
    }
)

jest.mock(
  '../pages/Breeds',
  () =>
    function breedsMock() {
      return <div data-testid='breeds-page'>Breeds</div>
    }
)

const renderRoutes = (route = '/') => {
  return render(
    <MemoryRouter initialEntries={[route || '/']}>
      <Routes />
    </MemoryRouter>
  )
}

describe('/', () => {
  it('renders the index page', () => {
    renderRoutes()

    expect(screen.getByTestId('index-page')).toBeInTheDocument()
  })
})

describe('/breeds', () => {
  it('renders the breeds page', () => {
    renderRoutes('/breeds')

    expect(screen.getByTestId('breeds-page')).toBeInTheDocument()
  })
})
