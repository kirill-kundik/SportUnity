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

export interface ActivityType {
	color: string,
	label: string,
	image_url: string
}

export enum ActivityStatus {
	NOT_STARTED = 'Not started',
	ACTIVE = 'Active',
	FINISHED = 'Finished',
}

export interface Activity {
	id: number,
	name: string,
	expected_start: string,
	start_time?: string,
	end_time?: string,
	description: string,
	status: ActivityStatus,
	type: ActivityType
}
