export interface Geo {
	lon: number,
	lat: number
}

export interface Type {
	id: number,
	label: string,
	image_url: string,
	color: string,
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

export enum ActivityStatus {
	NOT_STARTED = 'NOT_STARTED',
	ACTIVE = 'ACTIVE',
	FINISHED = 'FINISHED',
}

export interface Activity {
	id: number,
	name: string,
	expected_start: string,
	start_time?: string,
	end_time?: string,
	description: string,
	status: ActivityStatus,
	type: Type
}
