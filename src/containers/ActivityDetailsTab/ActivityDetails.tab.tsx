import React, {useEffect} from 'react'
import ActivityCard from 'components/ActivityCard'
import Loading from 'components/Loading'
import {useApi, usePersistedApi, usePersistedState} from 'hooks'
import constants from 'constants'
import Api from 'api'
import UserCard from 'components/UserCard'
import {Container, SubscribeButton, SubscribeButtonText, UserBlock, UserText,} from './ActivityDetails.styles'
import {ActivityStatus} from "../../entities";

export default function ActivityDetailsTab(props: any) {
	const selectedActivityId = props.navigation.state.params.activityId

	const [selectedUserId, setSelectedUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [user, userLoading, userError, fetchUser] = usePersistedApi({
		apiMethod: Api.getUser,
		entityName: constants.user,
		initialValue: {},
	})

	const [activity, loadingActivity, activityError, fetchActivity] = useApi({
		apiMethod: Api.getActivity,
		initialValue: null,
	})

	useEffect(() => {
		fetchUser(selectedUserId)
	}, [fetchUser, selectedUserId])

	useEffect(() => {
		fetchActivity(selectedActivityId)
	}, [fetchActivity, selectedActivityId])

	return <Container>
		{activity && user ?
			<>
				{activity.status === ActivityStatus.NOT_STARTED ?
					<ActivityCard
						activity={activity}
						onBtnClick={() => {
						}}
						btnText={'Add to my activities'} />
					: <ActivityCard activity={activity} />
				}
				<UserBlock>
					<UserText>Activity Master:</UserText>
					<UserCard
						user={user}
					/>
					<SubscribeButton onPress={() => {
					}}>
						<SubscribeButtonText>
							Subscribe
						</SubscribeButtonText>
					</SubscribeButton>
				</UserBlock>
			</>
			: <Loading />
		}
	</Container>
}
