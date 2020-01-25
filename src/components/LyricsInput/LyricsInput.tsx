import { TextInputProps } from 'react-native'
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
			<SubmitButton>
				<SubmitText
					onPress={useCallback(() => {
						onSubmit(enteredText)
					}, [onSubmit, enteredText])}
				>
					Submit
				</SubmitText>
			</SubmitButton>
		</Container>
	)
}
