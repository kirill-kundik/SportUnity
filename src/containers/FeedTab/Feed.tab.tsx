import React, {useEffect} from 'react'

import {RefreshControl, ScrollView} from 'react-native'
import {Container} from './Feed.styles'
import {usePersistedApi, usePersistedState} from 'hooks'
import Api from 'api'
import ActivityCard from 'components/ActivityCard/ActivityCard.component'
import constants from 'constants'
import {Activity} from 'entities'

export default function FeedTab(props: any) {

	const [selectedUserId, setSelectedUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [feed, loading, error, fetchFeed] = usePersistedApi({
		entityName: constants.feed,
		apiMethod: Api.getUserActivities,
		initialValue: [],
	})

	useEffect(() => {
		fetchFeed(selectedUserId)
	}, [fetchFeed, selectedUserId])

	return <Container
		refreshControl={
			<RefreshControl
				refreshing={loading}
				onRefresh={() => fetchFeed(selectedUserId)}
			/>
		}>
		{
			feed.map((a: Activity) =>
				<ActivityCard
					key={a.id}
					activity={a}
					onBtnClick={() => {
						props.navigation.navigate('ActivityDetails', {
							activityId: a.id,
						})
					}}
					btnText={'More'}
				/>)
		}
	</Container>


}
