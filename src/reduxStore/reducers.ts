import { SAVE_VALUE } from './constants'

export default (state: any, action: any) => {
	if (action.type === SAVE_VALUE) {
		return Object.assign({}, state, {
			[action.key]: action.value,
		})
	}

	return state
}
