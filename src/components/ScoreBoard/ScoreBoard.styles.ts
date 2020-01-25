import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

import Text from 'components/Text'

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
	padding: 100px 20px 0;
`

export const ScoreColumn = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 130px;
`

export const PersonLottie = styled(Lottie).attrs({
	source: require('animations/7194-smile.json'),
	ref: ref => ref?.play(),
})`
	margin-top: -5px;
	width: 130px;
	height: 130px;
`

export const ComputerLottie = styled(Lottie).attrs({
	source: require('animations/11045-buildin-a-web-page.json'),
	ref: ref => ref?.play(),
})`
	width: 100px;
	height: 100px;
`

export const ScoreText = styled(Text)`
	font-weight: bold;
	font-size: 40px;
	color: white;
`
