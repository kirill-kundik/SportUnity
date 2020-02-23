export {default} from './Activities.tab'
import {ActivityStatus} from 'entities'

export const activities = [
	{
		id: 12,
		name: 'Activity Name 1',
		status: ActivityStatus.ACTIVE,
		expected_start: '2020-02-21T13:52:01+00:00',
		start_time: '2020-02-22T15:00:01+00:00',
		end_time: undefined,
		description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
		type: {
			label: 'Bicycling',
			image_url: 'https://imgur.com/hC2DYiO.png',
			color: '#dd61c7',
		},
	},
	{
		id: 13,
		name: 'Activity Name 2',
		status: ActivityStatus.FINISHED,
		expected_start: '2020-02-20T23:30:01+00:00',
		start_time: '2020-02-20T23:55:01+00:00',
		end_time: '2020-02-21T21:52:01+00:00',
		description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		type: {
			label: 'Running',
			image_url: 'https://imgur.com/tByCzf4.png',
			color: '#99d544',
		},
	},
	{
		id: 14,
		name: 'Activity Name 3',
		status: ActivityStatus.NOT_STARTED,
		expected_start: '2020-02-20T17:30:01+00:00',
		start_time: undefined,
		end_time: undefined,
		description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text.',
		type: {
			label: 'Skating',
			image_url: 'https://imgur.com/EqWIdaB.png',
			color: '#ddac57',
		},
	},
	{
		id: 15,
		name: 'Activity Name 4',
		status: ActivityStatus.NOT_STARTED,
		expected_start: '2020-02-25T17:30:01+00:00',
		start_time: undefined,
		end_time: undefined,
		description: 'Contrary to popular belief',
		type: {
			label: 'Skating',
			image_url: 'https://imgur.com/EqWIdaB.png',
			color: '#ddac57',
		},
	},
]
