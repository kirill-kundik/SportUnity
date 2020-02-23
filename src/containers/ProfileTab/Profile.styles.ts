import styled from 'styled-components/native'
import { Picker } from 'react-native'

import Text from 'components/Text'

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		padding: 20,
	},
})``

export const SimpleText = styled(Text)`
	font-size: 20px;
`

export const UserIdPicker = styled.Picker`
	width: 100px;
	margin-left: 30px;
`

export const UserIdPickerItem = styled(Picker.Item)`
`

export const ContentBlock = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	
	background: white;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(163,163,163,0.5);
`

export const IdRow = styled(ContentBlock)`
	justify-content: center;
`

export const UserHolder = styled(ContentBlock)`
	margin-top: 20px;
`
