import { TouchableOpacityProps } from 'react-native'
import React from 'react'

import {
	Container,
	LottieButton,
	StartText,
} from './StartButton.styles'

export default function StartButton(
	props: TouchableOpacityProps,
) {

	return (
		<Container {...props as any}>
			<LottieButton />
			<StartText>
				Start
			</StartText>
		</Container>
	)
}
