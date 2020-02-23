import {Geo, User, Activity} from 'entities'
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

	getUserActivities(userId: number) {
		return this.get(`/activities/${userId}`)
			.then((activities: [Activity]) =>
				activities.sort(
					({start_time: a}: Activity, {start_time: b}: Activity) => {
						if (a === b) {
							return 0
						}
						if (a == null) {
							return -1
						}
						if (b == null) {
							return 1
						}
						return new Date(b).getTime() - new Date(a).getTime()
					}))
			.then(activities => activities.map((activity: any) => ({
				...activity,
				type: {
					...activity.type,
					label: activity.type.name,
				},
			} as Activity)))
	}

	getActivity(activityId: number) {
		return this.get(`/activity/${activityId}`)
			.then((activity: any) =>
				({
					...activity,
					type: {
						...activity.type,
						label: activity.type?.name,
					},
				} as Activity))
	}
}

export default new Api()
