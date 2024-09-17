import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useCachedData(type: 'getPlaylists') {
  const { data, error } = useSWR(`/api/${type}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}