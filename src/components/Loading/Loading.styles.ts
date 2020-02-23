import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

export const Loader = styled(Lottie).attrs({
	source: require('animations/927-triangle-loading'),
	ref: ref => ref?.play(),
})`
	align-self: center;
	width: 200px;
	height: 200px;
`
