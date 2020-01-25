import styled from 'styled-components/native'

import Text from 'components/Text'
import { colors } from '../../themes'

export const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
`

export const AlbumImage = styled.Image`
	width: 300px;
	height: 300px;
	border-width: 6px;
	border-color: ${colors.submit};
	margin-bottom: 20px;
	border-radius: 40px;
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
