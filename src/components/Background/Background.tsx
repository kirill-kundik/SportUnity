import React, { useMemo, useEffect } from 'react'

import { Animated } from 'react-native'

import {
	Container,
	LottieBackground,
} from './Background.styles'

export default function () {
	const progress = useMemo(() => {
		return new Animated.Value(0)
	}, [])

	useEffect(() => {
		const animation = Animated.loop(
			Animated.sequence([
				Animated.timing(progress, {
					toValue: 1,
					duration: 25000,
					isInteraction: false,
				}),
				Animated.timing(progress, {
					toValue: 0,
					duration: 0,
					isInteraction: false,
				}),
			]),
		)
		animation.start()

		return () => animation.stop()
	}, [progress])

	return (
		<Container>
			<LottieBackground
				progress={progress}
			/>
		</Container>
	)
}
