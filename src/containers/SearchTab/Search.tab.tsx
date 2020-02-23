import React, {useCallback, useState} from 'react'
import {View} from 'react-native'
import {Container, SubmitButton, SubmitText, TextInput} from './Search.styles'

export default function SearchTab() {
	const [enteredText, setEnteredText] = useState('')
	const onSubmit = (text: string) => {

	}
	return <Container>
		<TextInput
			onChangeText={useCallback((text) => {
				setEnteredText(text)
			}, [setEnteredText])}
		/>
		<SubmitButton
			onPress={useCallback(() => {
				onSubmit(enteredText)
			}, [enteredText])}
		>
			<SubmitText
			>
				Submit
			</SubmitText>
		</SubmitButton>
	</Container>
}
