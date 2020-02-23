import React from 'react'

import { RefreshControl, ScrollView } from 'react-native'
import { Container } from './Feed.styles'
import { useApi } from 'hooks'
import Api from 'api'
import ActivityCard from 'components/ActivityCard/ActivityCard.component'
import { activities } from 'containers/ActivitiesTab'

export default function FeedTab(props: any) {

	const [data, loading, error, fetchData] = useApi({
		apiMethod: async () => [],
		initialValue: activities,
	})

	return <ScrollView
		refreshControl={
			<RefreshControl
				refreshing={loading}
				onRefresh={() => {
					fetchData({})
				}}
			/>
		}>
		<Container>
			{
				data.map(a =>
					<ActivityCard
						key={a.id}
						activity={a}
						onClick={() => {
							props.navigation.navigate('ActivityDetails')
						}}
					/>)
			}
		</Container>
	</ScrollView>


}
