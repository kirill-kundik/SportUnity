import React, {useEffect} from 'react'
import ActivityCard from 'components/ActivityCard'
import {Container} from './Activities.styles'
import {RefreshControl} from 'react-native'
import {usePersistedState, usePersistedApi} from 'hooks'
import Api from 'api'
import constants from 'constants'
import {Activity} from 'entities'

export default function ActivitiesTab() {
	const [selectedUserId, setSelectedUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [activities, loading, error, fetchActivities] = usePersistedApi({
		entityName: constants.activities,
		apiMethod: Api.getUserActivities,
		initialValue: [],
	})

	useEffect(() => {
		fetchActivities(selectedUserId)
	}, [fetchActivities, selectedUserId])

	return <Container
		refreshControl={
			<RefreshControl
				refreshing={loading}
				onRefresh={() => fetchActivities(selectedUserId)}
			/>
		}>
		{
			activities.map((a: Activity) =>
				<ActivityCard
					key={a.id}
					activity={a}
				/>)
		}
	</Container>
}
