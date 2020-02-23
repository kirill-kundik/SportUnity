import styled from 'styled-components/native'
import Text from 'components/Text'
import {colors} from 'themes'

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		padding: 20,
	},
})``

export const SubscribeButton = styled.TouchableOpacity`
	background: ${colors.submit};
	align-items: center;
	width: 100%;
	height: 45px;
	justify-content: center;
`

export const SubscribeButtonText = styled(Text)`
	font-size: 20px;
	font-weight: 600;
	color: white;
`

export const UserBlock = styled.View`
	overflow: hidden;
	background: white;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(163,163,163,0.5);
`

export const UserText = styled(Text)`
	padding: 15px 15px 0;
	font-size: 25px;
	font-weight: 600;
	text-align: center;
`
