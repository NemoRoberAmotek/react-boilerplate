function createFetchMock({ status, body }) {
  const mock = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: status || 200,
      json: () => Promise.resolve(body)
    })
  )

  global.fetch = jest.fn().mockImplementation(mock)

  return mock
}

module.exports = { createFetchMock }
