import { TextInputProps } from 'react-native'
import React from 'react'

import {
	Container,
	TextInput,
	SubmitButton,
	SubmitText,
} from './LyricsInput.styles'

export default function LyricsInput(
	{
		style,
		...props
	}: TextInputProps,
) {

	return (
		<Container style={style}>
			<TextInput {...props as any} />
			<SubmitButton>
				<SubmitText>
					Submit
				</SubmitText>
			</SubmitButton>
		</Container>
	)
}
