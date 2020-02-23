const ApiUuddIoToken = 'be483ef9f00ef9aa1b1c20a6de328b23'

export default {
	findLyrics: (query: string) =>
		fetch(`https://api.audd.io/findLyrics/?api_token=${ApiUuddIoToken}&q=${query}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			},
		})
			.then(res => res.json())
			.then((res) => {
				if (res.status === 'success') {
					return res.result[0]
				}
				throw res
			})
			.then((res) => ({
				...res,
				media: JSON.parse(res.media),
			} as {
				artist: string,
				artist_id: string,
				full_title: string,
				lyrics: string,
				media: Array<{
					provider: string,
					type: string,
					url: string,
				}>,
				song_id: string,
				title: string,
				title_with_featured: string,
			}))
			.then((guess) => {
				const youtubeUrl = guess?.media?.find(({ provider }) => provider === 'youtube')?.url
				const youtubeId = youtubeUrl?.match(/.+v=(.+)$/)?.[1]

				return fetch(`https://api.deezer.com/search?q=${guess.title} ${guess.artist}`, {
					method: 'GET',
					headers: {
						'Authorization': 'Bearer 64e76734601e44131242f0ba531f78e4',
						'Content-Type': 'application/json',
						'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
					},
				})
					.then(res => res.json())
					.then(res => res.data[0])
					.then(res => {
						return {
							...res,
							youtubeUrl,
						} as {
							id: number,
							album: {
								cover_medium: string
								cover_big: string,
							}
							artist: {
								name: string,
							}
							title: string,
							youtubeUrl: string,
						}
					})
					.catch(() => ({
						...guess,
						album: {
							cover_medium: youtubeId
								? `https://img.youtube.com/vi/${youtubeId}/0.jpg`
								: 'https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg',
						},
						artist: {
							name: guess.artist,
						},
						youtubeUrl,
					}))
			}),
}

