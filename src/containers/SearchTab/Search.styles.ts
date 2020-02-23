import styled from 'styled-components/native'

import {TextInput as TextInputOriginal} from 'react-native'
import Text from 'components/Text'
import {colors} from 'themes'

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
})`
`

export const SubmitButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	background: ${colors.submit};
	margin-top: 20px;
	padding: 10px 23px;
	border-radius: 10px;
`

export const SubmitText = styled(Text)`
	font-weight: bold;
	font-size: 24px;
	color: white;
`

export const TextInput = styled(TextInputOriginal).attrs({
	multiline: false,
	autoFocus: true,
})`
	align-self: stretch;
	border-radius: 10px;
	
	background: white;
	color: ${colors.main};
	margin: 0 50px;
	padding: 15px;
	font-size: 16px;
`
