import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

import Text from 'components/Text'
import { colors } from 'themes'

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LottieButton = styled(Lottie).attrs({
	source: require('animations/5738-cursor-indicator-pulsing-animation.json'),
	ref: ref => ref?.play(),
})`
	position: absolute;
	width: 400px;
	height: 400px;
`

export const StartText = styled(Text)`
	font-size: 40px;
	font-weight: bold;
	color: ${colors.main};
`
