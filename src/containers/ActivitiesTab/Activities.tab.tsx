import React from 'react'
import ActivityCard from 'components/ActivityCard'
import {Container} from './Activities.styles'
import {RefreshControl, ScrollView} from 'react-native'
import {useApi} from 'utils'
import Api from 'api'
import {activities} from './'

export default function ActivitiesTab() {
	const [data, loading, error, fetchData] = useApi({
		apiMethod: Api.findLyrics,
		initialValue: activities,
	})

	return <ScrollView
		refreshControl={
			<RefreshControl
				refreshing={loading}
				onRefresh={fetchData}
			/>
		}>
		<Container>
			{
				data.map(a =>
					<ActivityCard
						key={a.id}
						activity={a}
					/>)
			}
		</Container>
	</ScrollView>
}
