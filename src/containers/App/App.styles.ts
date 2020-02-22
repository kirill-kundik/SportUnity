import styled from 'styled-components/native'

export const Container = styled.View`
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
`

export const InputHolder = styled.KeyboardAvoidingView.attrs({
	behavior: 'padding',
})`
	flex: 1;
	justify-content: center;
	padding-top: 40px;
`
