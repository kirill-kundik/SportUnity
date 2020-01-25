import React, { useEffect } from 'react'

import {
	Container,
	WinnerText,
	ScoreText,
} from './Results.styles'

interface ResultsProps {
	userScore: number,
	computerScore: number,
	onClose: () => any,
}

export default function Results(
	{
		userScore,
		computerScore,
		onClose,
		...props
	}: ResultsProps,
) {

	useEffect(() => {
		setTimeout(onClose, 5000)
	}, [onClose])

	return (
		<Container {...props}>
			<WinnerText>
				{userScore >= computerScore ? 'You win!' : 'Computer wins!'}
			</WinnerText>
			<ScoreText>
				{userScore} - {computerScore}
			</ScoreText>
		</Container>
	)
}
