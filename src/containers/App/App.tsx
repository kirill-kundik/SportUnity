import React, { useCallback, useState } from 'react'

import Background from 'components/Background'
import LyricsInput from 'components/LyricsInput'
import StartButton from 'components/StartButton'
import RoundNumber from 'components/RoundNumber'
import SongGuess from 'components/SongGuess'
import ScoreBoard from 'components/ScoreBoard'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import Popup from 'components/Popup/Popup'

import Api from 'api'

import {
	Keyboard,
	StatusBar,
} from 'react-native'
import {
	Container,
	InputHolder,
} from './App.styles'
import { useApi, useKeyboardOpened } from 'utils'

export enum PopupNames {
	Start,
	Round,
	Input,
	Guess,
}

export default function App() {

	const keyboardOpened = useKeyboardOpened()
	const [roundNumber, setRoundNumber] = useState(1)
	const [openedPopup, setOpenedPopup] = useState(PopupNames.Start)
	const [guess, loading, error, fetchGuess] = useApi({
		apiMethod: Api.findLyrics,
		initialValue: undefined,
	})

	const [userScore, setUserScore] = useState(0)
	const [compScore, setCompScore] = useState(0)

	const notFound = !guess || error
	const onCloseNotFound = useCallback(() => {
		setOpenedPopup(PopupNames.Input)
	}, [setOpenedPopup])

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
					opened={loading}
				>
					<Loading />
				</Popup>
				<Popup
					opened={
						(
							openedPopup === PopupNames.Input
						) && !keyboardOpened && !loading
					}
				>
					<ScoreBoard
						userScore={userScore}
						computerScore={compScore}
					/>
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.Start}
				>
					<StartButton
						onPress={useCallback(() => {
							setOpenedPopup(PopupNames.Round)
						}, [setOpenedPopup])}
					/>
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.Round}
				>
					{
						openedPopup === PopupNames.Round && (
							<RoundNumber
								roundNumber={roundNumber}
								onClose={() => {
									setOpenedPopup(PopupNames.Input)
								}}
							/>
						)
					}
				</Popup>
				<Popup
					opened={openedPopup === PopupNames.Input && !loading}
				>
					<InputHolder>
						<LyricsInput
							key={openedPopup}
							placeholder={'Type your lyrics...'}
							onSubmit={useCallback((text) => {
								setOpenedPopup(PopupNames.Guess)
								fetchGuess(text)
							}, [setOpenedPopup, fetchGuess])}
						/>
					</InputHolder>
				</Popup>
				<Popup
					opened={
						openedPopup === PopupNames.Guess && !loading && !notFound
					}
				>
					<SongGuess
						key={guess as any}
						photoUrl={guess?.album?.cover_medium as string}
						title={guess?.title as string}
						artist={guess?.artist?.name as string}
						onCorrect={useCallback(() => {
							setCompScore(compScore + 1)
							setRoundNumber(roundNumber + 1)
							setOpenedPopup(PopupNames.Round)
						}, [setCompScore, compScore, setRoundNumber, roundNumber, setOpenedPopup])}
						onWrong={useCallback(() => {
							setUserScore(userScore + 1)
							setRoundNumber(roundNumber + 1)
							setOpenedPopup(PopupNames.Round)
						}, [setUserScore, userScore, setRoundNumber, roundNumber, setOpenedPopup])}
					/>
				</Popup>
				<Popup
					opened={
						openedPopup === PopupNames.Guess && !loading && notFound
					}
				>
					{
						openedPopup === PopupNames.Guess && !loading && notFound && (
							<NotFound
								key={guess as any}
								onClose={onCloseNotFound}
							/>
						)
					}
				</Popup>
			</Container>
		</>
	)
}
