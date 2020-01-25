import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

import Text from 'components/Text'

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const LottieBird = styled(Lottie).attrs({
	source: require('animations/2118-funky-chicken.json'),
	ref: ref => ref?.play(),
})`
	width: 250px;
	height: 250px;
`

export const RoundText = styled(Text).attrs({
	animated: true,
})`
	font-size: 45px;
	color: white;
	font-weight: bold;
`
