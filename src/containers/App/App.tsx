import React, { useCallback, useState } from 'react'

import Background from 'components/Background'
import LyricsInput from 'components/LyricsInput'
import StartButton from 'components/StartButton'
import RoundNumber from 'components/RoundNumber'
import Popup from 'components/Popup/Popup'

import { Alert, TextProps } from 'react-native'

import {
	Keyboard,
	StatusBar,
} from 'react-native'
import {
	Container,
	InputHolder,
} from './App.styles'

enum PopupNames {
	StartButton,
	RoundNumber,
	TextInput,
	VoiceInput,
	RoundResult,
}

export default function App() {

	const [roundNumber, setRoundNumber] = useState(1)
	const [openedPopup, setOpenedPopup] = useState(PopupNames.StartButton)

	return (
		<>
			<StatusBar
				barStyle={'light-content'}
			/>
			<Container
				onPress={Keyboard.dismiss}
			>
				<Background />
				<Popup
					opened={openedPopup === PopupNames.StartButton}
				>
					<StartButton
						onPress={useCallback(() => {
							setOpenedPopup(PopupNames.RoundNumber)
						}, [setOpenedPopup])}
					/>
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.RoundNumber}
				>
					{
						openedPopup === PopupNames.RoundNumber && (
							<RoundNumber
								roundNumber={roundNumber}
								onClose={() => {
									setOpenedPopup(PopupNames.TextInput)
								}}
							/>
						)
					}
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.TextInput}
				>
					<InputHolder>
						<LyricsInput
							placeholder={'Type your lyrics...'}
							onSubmit={useCallback((text) => {
								setRoundNumber(roundNumber + 1)
								setOpenedPopup(PopupNames.RoundNumber)
							}, [setRoundNumber, roundNumber, setOpenedPopup])}
						/>
					</InputHolder>
				</Popup>
			</Container>
		</>
	)
}
