import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

export const Loader = styled(Lottie).attrs({
	source: require('animations/4432-face-scanning.json'),
	ref: ref => ref?.play(),
})`
	width: 400px;
	height: 400px;
`
