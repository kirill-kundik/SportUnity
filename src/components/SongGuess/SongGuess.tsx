import React from 'react'

import {
	Container,
	AlbumImage,
	Title,
	Artist,
	ButtonsHolders,
	CorrectButton,
	WrongButton,
	ButtonsText,
} from './SongGuess.styles'

interface SongGuessProps {
	key?: any,
	photoUrl: string,
	title: string,
	artist: string,

	onCorrect: () => any,
	onWrong: () => any,
}

export default function SongGuess(
	{
		photoUrl,
		title,
		artist,
		onCorrect,
		onWrong,
		...props
	}: SongGuessProps,
) {
	return (
		<Container {...props}>
			<AlbumImage
				source={{ uri: photoUrl }}
				resizeMode={'cover'}
			/>
			<Title>
				{title}
			</Title>
			<Artist>
				{artist}
			</Artist>
			<ButtonsHolders>
				<CorrectButton
					onPress={onCorrect}
				>
					<ButtonsText>
						Correct!
					</ButtonsText>
				</CorrectButton>
				<WrongButton
					onPress={onWrong}
				>
					<ButtonsText>
						Wrong!
					</ButtonsText>
				</WrongButton>
			</ButtonsHolders>
		</Container>
	)
}
