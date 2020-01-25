import { Keyboard, TextInputProps } from 'react-native'
import React, { useCallback, useState } from 'react'

import {
	Container,
	TextInput,
	SubmitButton,
	SubmitText,
} from './LyricsInput.styles'

interface LyricsInputProps extends TextInputProps {
	onSubmit: (text: string) => any,
}

export default function LyricsInput(
	{
		onSubmit,
		style,
		...props
	}: LyricsInputProps,
) {
	const [enteredText, setEnteredText] = useState('')

	return (
		<Container style={style}>
			<TextInput
				onChangeText={useCallback((text) => {
					setEnteredText(text)
				}, [setEnteredText])}
				{...props as any}
			/>
			<SubmitButton
				onPress={useCallback(() => {
					onSubmit(enteredText)
				}, [onSubmit, enteredText])}
			>
				<SubmitText
				>
					Submit
				</SubmitText>
			</SubmitButton>
		</Container>
	)
}
