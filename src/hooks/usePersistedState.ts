import { useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { saveValue } from 'reduxStore/actions'

interface UsePersistedStateProps<T> {
	entityName: string,
	initialValue?: T,
}

type UsePersistedStateReturn<T> = [
	T,
	(newValue: T) => any
]

export default function usePersistedState<T>(
	{
		entityName,
		initialValue,
	}: UsePersistedStateProps<T>,
): UsePersistedStateReturn<T> {
	const entity = useSelector((state: any) => state[entityName])
	const dispatch = useDispatch()

	const setValue = useCallback((newValue: T) => {
		dispatch(saveValue(entityName, newValue))
	}, [dispatch, entityName])

	useEffect(() => {
		if (entity === undefined) {
			setValue(initialValue as T)
		}
	}, [entity, setValue, initialValue])

	return [
		// for a first render, useEffect above
		// will not be yet triggered
		entity === undefined
			? initialValue
			: entity,
		setValue,
	]
}
