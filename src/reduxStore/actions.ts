import { SAVE_VALUE } from './constants'

export const saveValue = (key: string, value: any) => ({
	type: SAVE_VALUE,
	key,
	value,
})
