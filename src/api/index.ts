import { Geo } from 'entities'
import autoBind from 'auto-bind'

class Api {
	baseUrl: string

	constructor(baseUrl: string = 'http://192.168.33.209:8088') {
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
					return res.json()
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
	}

	getUser(id: number) {
		return this.get(`/user/${id}`)
			.then(user => ({
				activities_count: Math.round(Math.random() * 10),
				...user,
			}))
	}
}

export default new Api()
