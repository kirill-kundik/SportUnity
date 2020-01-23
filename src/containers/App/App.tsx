import React from 'react'

import Background from 'components/Background'
import LyricsInput from 'components/LyricsInput'
import StartButton from 'components/StartButton'
import {
	Keyboard,
	KeyboardAvoidingView,
	StatusBar,
} from 'react-native'
import {
	Container,
	InputHolder,
} from './App.styles'

export default function App() {

	return (
		<>
			<StatusBar
				barStyle={'light-content'}
			/>
			<Container
				onPress={Keyboard.dismiss}
			>
				<Background />
				<InputHolder>
					<StartButton />
					<LyricsInput
						placeholder={'Type your lyrics...'}
					/>
				</InputHolder>
			</Container>
		</>
	)
}
