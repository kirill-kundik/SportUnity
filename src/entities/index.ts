export interface Geo {
	lng: number,
	lat: number
}

export interface Type {
	id: number,
	label: string,
	image_url: string
}

export interface User {
	id: number,
	name: string,
	email: string,
	description: string,
	image_url: string,
	types: Array<Type>
	activities_count: number
}

export interface RecentUserActivity {
	user_id: number,
	color: string,
	image_url: string,
	locations: Array<Geo>
}
