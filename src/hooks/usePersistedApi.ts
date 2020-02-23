import { useCallback } from 'react'
import { usePersistedState } from '.'

import { default as useApi, UseApiProps, UseApiReturn } from './useApi'

export type UsePersistedApiProps<Req, Res> = UseApiProps<Req, Res> & {
	entityName: string
}

export default function usePersistedApi<Req, Res>(
	{
		entityName,
		onSuccess,
		...props
	}: UsePersistedApiProps<Req, Res>,
): UseApiReturn<Req, Res> {
	const [value, setValue] = usePersistedState({
		entityName,
		initialValue: props.initialValue,
	})

	return useApi({
		...props,
		initialValue: value,
		onSuccess: useCallback((res) => {
			setValue(res)
			onSuccess && onSuccess(res)
		}, [setValue, onSuccess]),
	})
}
