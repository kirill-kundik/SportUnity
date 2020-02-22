import React, { useEffect } from 'react'

import { useFollowAnimation } from 'hooks'
import {
	Container,
} from './Popup.styles'

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
			pointerEvents={opened ? 'box-none' : 'none'}
			style={[
				{
					opacity: current,
					transform: [{
						scale: current.interpolate({
							inputRange: [0, 1],
							outputRange: [0.8, 1],
						}),
					}],
				},
				props.style,
			]}
			{...props}
		/>
	)
}
