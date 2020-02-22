import React, {useCallback, useState} from 'react'

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
import Navigation from 'containers/Navigation'

import Api from 'api'

import {
	Keyboard,
	StatusBar,
} from 'react-native'
import {
	Container,
	InputHolder,
} from './App.styles'
import {useApi, useKeyboardOpened} from 'utils'
import {createAppContainer} from 'react-navigation'

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
	const [openedPopup, setOpenedPopupName] = useState(PopupNames.Start)
	const setOpenedPopup = useCallback((name) => {
		Keyboard.dismiss()
		setOpenedPopupName(name)
	}, [setOpenedPopupName])

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
				<Navigation />

				<Background />
			</Container>
		</>
	)
}
