import React, { useCallback, useState } from 'react'

import Background from 'components/Background'
import Popup from 'components/Popup/Popup'

import LyricsInput from 'components/LyricsInput'
import StartButton from 'components/StartButton'
import RoundNumber from 'components/RoundNumber'
import SongGuess from 'components/SongGuess'
import ScoreBoard from 'components/ScoreBoard'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import RoundResults from 'components/Results'

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

const ROUNDS_COUNT = 5

export enum PopupNames {
	Start,
	Round,
	Input,
	Guess,
	Results
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

	const notFound = !guess?.title || error
	const onCloseNotFound = useCallback(() => {
		setOpenedPopup(PopupNames.Input)
	}, [setOpenedPopup])
	const onCloseResults = useCallback(() => {
		setRoundNumber(1)
		setUserScore(0)
		setCompScore(0)
		setOpenedPopup(PopupNames.Start)
	}, [setRoundNumber, setUserScore, setCompScore, setOpenedPopup])

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
							placeholder={'Moves like jagger..'}
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
						youtubeUrl={guess?.youtubeUrl as string}
						onCorrect={useCallback(() => {
							setCompScore(compScore + 1)
							if (roundNumber >= ROUNDS_COUNT) {
								setOpenedPopup(PopupNames.Results)
							} else {
								setRoundNumber(roundNumber + 1)
								setOpenedPopup(PopupNames.Round)
							}
						}, [setCompScore, compScore, setRoundNumber, roundNumber, setOpenedPopup])}
						onWrong={useCallback(() => {
							setUserScore(userScore + 1)
							if (roundNumber >= ROUNDS_COUNT) {
								setOpenedPopup(PopupNames.Results)
							} else {
								setRoundNumber(roundNumber + 1)
								setOpenedPopup(PopupNames.Round)
							}
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
				<Popup
					opened={
						openedPopup === PopupNames.Results
					}
				>
					{
						openedPopup === PopupNames.Results && (
							<RoundResults
								onClose={onCloseResults}
								computerScore={compScore}
								userScore={userScore}
							/>
						)
					}
				</Popup>
			</Container>
		</>
	)
}
