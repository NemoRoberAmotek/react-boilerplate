import { useEffect, useState, DependencyList } from 'react'
import { toast } from 'react-toastify'
import { FetchError } from '../types/Requests'
import { useNavigate } from 'react-router-dom'

function useFetchResource<T>(
  path: string,
  deps: DependencyList = [],
  params?: {
    page?: number
    limit?: number
  },
  wait?: boolean
): [T, boolean, FetchError | undefined] {
  const [data, setData] = useState<T | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<FetchError | undefined>(undefined)

  const executeFetch = async () => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_PROXY_ROOT_PATH}${path}?limit=${params?.limit}&page=${params?.page}`
      )

      const data = await res.json()

      try {
        res.status == 200 ? setData(data) : setError(data)
      } catch (error) {
        toast('Something went wrong. Please try again later.')
      }

      setLoading(false)
    }

    getData()
  }

  useEffect(() => {
    if (!wait) {
      executeFetch()
    }
  }, deps)

  return [data as T, loading, error]
}

export default useFetchResource
