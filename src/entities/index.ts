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
	activitiesCount: number
}
