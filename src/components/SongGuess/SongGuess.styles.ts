import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'
import { Dimensions } from 'react-native'

const { width: windowWidth } = Dimensions.get('window')

import Text from 'components/Text'
import { colors } from 'themes'

const YouTubeOriginal = require('react-native-youtube').default

export const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
`

export const AlbumButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	align-self: stretch;
	height: ${windowWidth - 80}px;
	
	justify-content: center;
	align-items: center;

	border-width: 6px;
	border-color: ${colors.submit};
	margin-bottom: 20px;
	border-radius: 40px;
	overflow: hidden;
`

export const AlbumImage = styled.Image.attrs({
	resizeMode: 'cover',
})`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 40px;
`

export const PlayLottie = styled(Lottie).attrs({
	source: require('animations/1562-play-button.json'),
	ref: ref => ref?.play(),
})`
	width: 160px;
	height: 160px;
`

export const Title = styled(Text)`
	color: white;
	font-weight: bold;
	font-size: 25px;
	text-align: center;
`

export const Artist = styled(Title)`
	font-size: 30px;
`

export const ButtonsHolders = styled.View`
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const ButtonsText = styled(Text)`
	font-size: 30px;
	color: white;
	font-weight: bold;
`

export const CorrectButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	background: ${colors.submit};
	padding: 10px 23px;
	border-radius: 13px;
	
	margin-right: 15px;
	margin-left: 0;
`

export const WrongButton = styled(CorrectButton)`
	background: ${colors.wrong};
	margin-left: 15px;
	margin-right: 0;
`

export const YouTube = styled(YouTubeOriginal)`
	position: absolute;
	width: 400px;
	height: 400px;
`
