import { Geo, User, Type } from 'entities'
import autoBind from 'auto-bind'

class Api {
	baseUrl: string

	constructor(baseUrl: string = 'https://int20h.lknmessenger.co') {
		this.baseUrl = baseUrl
		autoBind(this)
	}

	private request(url: string, params: RequestInit) {
		return fetch(`${this.baseUrl}${url}`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			},
			...params,
		})
			.then(res => {
				if (res.status.toString().startsWith('2')) {
					return res
						.text()
						.then(t => {
							try {
								return JSON.parse(t)
							} catch {
								return t
							}
						})
				}

				return res
					.text()
					.then(Promise.reject)
			})
	}

	private post(url: string, body?: any) {
		return this.request(url, {
			method: 'POST',
			body: body && JSON.stringify(body),
		})
	}

	private get(url: string) {
		return this.request(url, {
			method: 'GET',
		})
	}

	getTypeList() {
		return this.get('/getTypeList')
			.then(types => types
				.map((type: any) => ({
					...type,
					label: type.name,
				} as Type)))
	}

	getUser(id: number) {
		return this.get(`/user/${id}`)
			.then(user => ({
				...user,
				id: user.id,
				email: user.email,
				image_url: user.photo_url,
				description: user.description,
				activities_count: Math.round(Math.random() * 10),
				types: user.types?.map((type: any) => ({
					...type,
					id: type.id,
					image_url: type.image_url,
					label: type.name,
					color: type.color,
				})),
			} as User))
	}

	startTrackByType({ userId, type }: { userId: number, type: Type }) {
		return this.post('/startTrackType', {
			userId,
			typeId: type.id,
		})
	}

	stopTracking({ userId }: { userId: number }) {
		return this.post('/stopTrack', {
			userId,
		})
	}

	isTracking({ userId }: { userId: number }) {
		return this.get(`/check/${userId}`)
			.then(({ da }) => da)
	}

	getNearby() {
		return this.get('/getNearby')
	}

}

export default new Api()
