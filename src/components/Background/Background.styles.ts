import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

import LinearGradient from 'react-native-linear-gradient'
import { colors } from 'themes'

export const Container = styled(LinearGradient).attrs({
	colors: [colors.mainGradientStart, colors.mainGradientEnd],
})`
	width: 100%;
	height: 100%;
	position: absolute;
`

export const LottieBackground = styled(Lottie).attrs({
	source: require('animations/2881-music-fly.json'),
})`
	transform: scale(2);
	opacity: 0.4;
`
