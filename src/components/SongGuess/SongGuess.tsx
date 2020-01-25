import React, { useCallback, useState } from 'react'

import {
	Container,
	AlbumButton,
	AlbumImage,
	PlayLottie,
	Title,
	Artist,
	ButtonsHolders,
	CorrectButton,
	WrongButton,
	ButtonsText,
	YouTube,
} from './SongGuess.styles'
import { Platform, View } from 'react-native'

interface SongGuessProps {
	key?: any,
	photoUrl: string,
	title: string,
	artist: string,
	youtubeUrl: string,

	onCorrect: () => any,
	onWrong: () => any,
}

export default function SongGuess(
	{
		photoUrl,
		title,
		artist,
		youtubeUrl,
		onCorrect,
		onWrong,
		...props
	}: SongGuessProps,
) {
	const [videoPlaying, setVideoPlaying] = useState(false)
	const youtubeVideoId = youtubeUrl?.match(/.+v=(.+)$/)?.[1]

	return (
		<Container {...props}>
			<AlbumButton
				key={youtubeVideoId}
				disabled={!youtubeVideoId}
				onPress={useCallback(() => {
					setVideoPlaying(!videoPlaying)
				}, [videoPlaying])}
			>
				{
					!videoPlaying && (
						<>
							<AlbumImage
								source={{ uri: photoUrl }}
							/>
							{
								youtubeVideoId && <PlayLottie />
							}
						</>
					)
				}
				{
					videoPlaying && (
						<YouTube
							apiKey={'AIzaSyBypYq-aJh06BSKIDIPLNTTPENc1H6Ulpw'}
							fullscreen={Platform.OS !== 'ios'}
							videoId={youtubeVideoId}
							play={videoPlaying}
							origin="http://www.youtube.com"
							loop
							resumePlayAndroid={false}
							onChangeFullscreen={(e: any) => {
								if (!e.isFullscreen && videoPlaying) {
									setVideoPlaying(false)
								}
							}}

							// onReady={e => this.setState({ isReady: true })}
							// onChangeQuality={e => this.setState({ quality: e.quality })}
							// onError={e => this.setState({ error: e.error })}
						/>
					)
				}
			</AlbumButton>
			<Title>
				{title}
			</Title>
			<Artist>
				{artist}
			</Artist>
			<ButtonsHolders>
				<CorrectButton
					onPress={useCallback(() => {
						setVideoPlaying(false)
						onCorrect()
					}, [setVideoPlaying, onCorrect])}
				>
					<ButtonsText>
						Correct!
					</ButtonsText>
				</CorrectButton>
				<WrongButton
					onPress={useCallback(() => {
						setVideoPlaying(false)
						onWrong()
					}, [setVideoPlaying, onWrong])}
				>
					<ButtonsText>
						Wrong!
					</ButtonsText>
				</WrongButton>
			</ButtonsHolders>
		</Container>
	)
}
