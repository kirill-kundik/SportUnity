import styled from 'styled-components/native'

import Text from 'components/Text'

export const Container = styled.View`
	border-radius: 20px;
	
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Icon = styled.Image.attrs({
	resizeMode: 'contain',
})`
	width: 80px;
	height: 80px;
	border-radius: 20px;
	background: white;
`

export const TypeText = styled(Text)`
	font-size: 16px;
`
