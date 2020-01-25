import React, { useCallback, useState } from 'react'

import Background from 'components/Background'
import LyricsInput from 'components/LyricsInput'
import StartButton from 'components/StartButton'
import RoundNumber from 'components/RoundNumber'
import SongGuess from 'components/SongGuess'
import ScoreBoard from 'components/ScoreBoard'
import Popup from 'components/Popup/Popup'

import Api from 'api'

import {
	Alert,
	Keyboard,
	StatusBar,
} from 'react-native'
import {
	Container,
	InputHolder,
} from './App.styles'
import { useApi, useKeyboardOpened } from 'utils'

enum PopupNames {
	StartButton,
	RoundNumber,
	TextInput,
	SongGuess,
	RoundResult,
}

export default function App() {

	const keyboardOpened = useKeyboardOpened()
	const [roundNumber, setRoundNumber] = useState(1)
	const [openedPopup, setOpenedPopup] = useState(PopupNames.StartButton)
	const [guess, loading, error, getGuesses] = useApi({
		apiMethod: Api.findLyrics,
		initialValue: undefined,
		onSuccess: useCallback((res) => {
			setOpenedPopup(PopupNames.SongGuess)
		}, [setOpenedPopup]),
	})

	console.log('guess', guess)

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
					opened={
						(
							openedPopup === PopupNames.TextInput ||
							openedPopup === PopupNames.RoundResult
						) && !keyboardOpened
					}
				>
					<ScoreBoard
						userScore={2}
						computerScore={3}
					/>
				</Popup>
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
							key={openedPopup}
							placeholder={'Type your lyrics...'}
							onSubmit={useCallback((text) => {
								getGuesses(text)
							}, [getGuesses])}
						/>
					</InputHolder>
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.SongGuess}
				>
					<SongGuess
						photoUrl={guess?.album?.cover_big as string}
						title={guess?.title as string}
						artist={guess?.artist?.name as string}
						onCorrect={useCallback(() => {
							setRoundNumber(roundNumber + 1)
							setOpenedPopup(PopupNames.RoundNumber)
						}, [setRoundNumber, roundNumber, setOpenedPopup])}
						onWrong={useCallback(() => {
							setRoundNumber(roundNumber + 1)
							setOpenedPopup(PopupNames.RoundNumber)
						}, [setRoundNumber, roundNumber, setOpenedPopup])}
					/>
				</Popup>
			</Container>
		</>
	)
}
