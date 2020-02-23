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
			pointerEvents={opened ? 'auto' : 'none'}
			style={[
				{
					opacity: current,
				},
				props.style,
			]}
			{...props}
		/>
	)
}
