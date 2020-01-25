import React from 'react'

import {
	Container,
	ScoreColumn,
	ScoreText,
	PersonLottie,
	ComputerLottie,
} from './ScoreBoard.styles'

interface ScoreBoardProps {
	userScore: number,
	computerScore: number
}

export default function ScoreBoard(
	{
		userScore,
		computerScore,
	}: ScoreBoardProps,
) {

	return (
		<Container>
			<ScoreColumn>
				<ScoreText>
					{userScore}
				</ScoreText>
				<PersonLottie />
			</ScoreColumn>
			<ScoreText>
				-
			</ScoreText>
			<ScoreColumn>
				<ScoreText>
					{computerScore}
				</ScoreText>
				<ComputerLottie />
			</ScoreColumn>
		</Container>
	)
}
