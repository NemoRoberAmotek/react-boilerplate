const request = require('supertest')

process.env.API_ROOT_PATH = 'http://localhost:2000'
process.env.DOGS_API_KEY = '12345'

const server = require('../../server.js')

let fetchMock

describe('GET /api/breeds', () => {
  beforeEach(() => {
    fetchMock = jest.fn().mockImplementation(
      jest.fn(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () =>
            Promise.resolve([
              {
                name: 'Labrador'
              },
              {
                name: 'Cavalier King Charles Spaniel'
              }
            ])
        })
      })
    )

    global.fetch = fetchMock
  })

  afterEach(async () => {
    await server.close()
  })

  test('requests the breeds from the api', async () => {
    await request(server).get('/api/breeds')

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:2000/breeds', {
      headers: {
        'x-api-key': '12345'
      }
    })
  })

  test('responds with the breeds returned from the api', async () => {
    const res = await request(server).get('/api/breeds')

    expect(res.body.length).toBe(2)
  })
})
