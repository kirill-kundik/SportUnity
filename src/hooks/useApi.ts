import { useState, useCallback } from 'react'

export type UseApiProps<Req, Res> = {
	apiMethod: (props: Req) => Promise<Res>,
	onSuccess?: (res: Res) => any,
	onError?: (err: any) => any,
	initialValue: Res,
}

export type UseApiReturn<Req, Res> = [
	Res,
	boolean,
	any,
	(props: Req) => any
]

export default function useApi<Req, Res>(
	{
		apiMethod,
		onSuccess,
		onError,
		initialValue,
	}: UseApiProps<Req, Res>,
): UseApiReturn<Req, Res> {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [res, setRes] = useState(initialValue)

	const makeRequest = useCallback(async (props: Req) => {
		setLoading(true)
		try {
			const res = await apiMethod(props)
			onSuccess && onSuccess(res)
			setError(null)
			setRes(res)
		} catch (err) {
			onError && onError(err)
			setError(err)
		}
		setLoading(false)
	}, [
		setLoading,
		apiMethod,
		setError,
		onError,
		setRes,
		onSuccess,
	])

	return [res, loading, error, makeRequest]
}
