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
