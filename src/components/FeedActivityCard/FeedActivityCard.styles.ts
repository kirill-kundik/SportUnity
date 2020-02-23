import styled from 'styled-components/native'
import Text from 'components/Text'
import {View, Image} from 'react-native'
import {colors} from 'themes'

export const Wrapper = styled(View)`
	box-shadow: 0 5px 10px rgba(25,61,255,0.1);
	background: white;
	padding: 10px 10px 10px;
	border-radius: 10px;
	margin-bottom: 20px;
`
export const Row = styled(View)`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`

export const RowText = styled(Text)`
	font-size: 16px;
	font-weight: 600;
`

export const User = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	background: rgba(128,128,128,0.1);
	border-radius: 5px;
	padding: 4px 6px;
	flex-direction: row;
	align-items: center;
	margin: 0 8px;
`

export const UserLogo = styled(Image)`
	width: 25px;
	height: 25px;
	border-radius: 12.5px;
	resizeMode: cover;
`

export const UserName = styled(Text)`
	margin-left: 5px;
	font-size: 16px;
	font-weight: 600;
`


export const Timestamp = styled(Text)`
	margin-top: 10px;
	font-size: 13px;
`
