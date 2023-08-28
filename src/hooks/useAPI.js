const { useState, useCallback } = require('react')

const useApi = (serviceMethod) => {
    const [result, setResult] = useState(undefined)
    const [isFetching, setFetching] = useState(false)
    const [error, setError] = useState(undefined)

    const apiCallback = useCallback(
        async (...args) => {
            setError(undefined)
            setResult(undefined)
            setFetching(true)
            try {
                const response = await serviceMethod(...args)
                setResult(response.data)
            } catch (err) {
                if (err.response) {
                    setError(
                        err.response?.data?.message || err.response.data
                    )
                } else {
                    setError(err.message || err)
                }
            }
            setFetching(false)
        },
        [serviceMethod]
    )

    const apiResponse = {
        result,
        error,
        isFetching
    }

    return [apiResponse, apiCallback]
}

export default useApi
