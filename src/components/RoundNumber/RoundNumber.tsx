import React, { useEffect, useMemo } from 'react'

import {
	Container,
	LottieBird,
	RoundText,
} from './RoundNumber.styles'
import { Animated } from 'react-native'

interface RoundNumberProps {
	roundNumber: number,
	onClose: () => any,
}

export default function RoundNumber(
	{
		roundNumber,
		onClose,
	}: RoundNumberProps,
) {

	const current = useMemo(() => new Animated.Value(0), [])
	useEffect(() => {
		const animation = Animated.sequence([
			Animated.timing(current, {
				toValue: 0,
				isInteraction: false,
				duration: 500,
			}),
			Animated.timing(current, {
				toValue: 1,
				isInteraction: false,
				duration: 1000,
			}),
		])
		animation.start(onClose)
	}, [current, onClose])

	return (
		<Container>
			<LottieBird />
			<RoundText
				style={{
					transform: [
						{
							skewX: current.interpolate({
								inputRange: [0, 1],
								outputRange: ['-180deg', '0deg'],
							}),
						},
						{
							scaleY: current.interpolate({
								inputRange: [0, 1],
								outputRange: [1.2, 1],
							}),
						},
					],
				} as any}
			>
				Round {roundNumber}
			</RoundText>
		</Container>
	)
}
