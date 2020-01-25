import React, { useMemo, useEffect } from 'react'

import {
	Animated,
} from 'react-native'

import {
	Container,
} from './Popup.styles'
import { useFollowAnimation } from '../../utils'

interface PopupProps {
	opened: boolean,
	children?: any,
	style?: any,
}

export default function Popup(
	{
		opened,
		...props
	}: PopupProps,
) {
	const [current, setGoal] = useFollowAnimation({})

	useEffect(() => {
		setGoal(opened ? 1 : 0)
	}, [setGoal, opened])

	return (
		<Container
			style={[
				{
					transform: [{
						scale: current,
					}],
				},
				props.style,
			]}
			{...props}
		/>
	)
}
