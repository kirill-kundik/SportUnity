import React, {useEffect} from 'react'

import {RefreshControl, ScrollView} from 'react-native'
import {Container} from './Feed.styles'
import {usePersistedApi, usePersistedState} from 'hooks'
import Api from 'api'
import ActivityCard from 'components/ActivityCard/ActivityCard.component'
import constants from 'constants'
import {Activity, User} from 'entities'
import FeedFollowCard from "components/FeedFollowCard";
import FeedActivityCard from "../../components/FeedActivityCard";

interface IFeedItem {
	timestamp: string,
	type: string,
	status?: string,
	user?: User,
	activity?: Activity,
	follower?: User,
	started_following?: User,
}

export default function FeedTab(props: any) {

	const [selectedUserId, setSelectedUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [feed, loading, error, fetchFeed] = usePersistedApi({
		entityName: constants.feed,
		apiMethod: Api.getFeed,
		initialValue: [],
	})

	useEffect(() => {
		fetchFeed(selectedUserId)
	}, [fetchFeed, selectedUserId])

	const navigateToUser = (userId: number) => {
		props.navigation.navigate('UserDetails', {
			userId: userId,
		})
	}

	return <Container
		refreshControl={
			<RefreshControl
				refreshing={loading}
				onRefresh={() => fetchFeed(selectedUserId)}
			/>
		}>
		{
			feed.map((feedItem: IFeedItem, index: number) => {
				if (feedItem.type === 'following')
					return <FeedFollowCard
						key={index}
						follower={feedItem.follower}
						following={feedItem.started_following}
						timestamp={feedItem.timestamp}
						onUserClick={navigateToUser} />
				return <FeedActivityCard
					activity={feedItem.activity}
					user={feedItem.user}
					timestamp={feedItem.timestamp}
					status={feedItem.status}
					onUserClick={navigateToUser}
					onMoreClick={() => {}} />
			})
			// 	<ActivityCard
			// 	key={a.id}
			// 	activity={a}
			// 	onBtnClick={() => {
			// 	props.navigation.navigate('ActivityDetails', {
			// 	activityId: a.id,
			// })
			// }}
			// 	btnText={'More'}
			// 	/>
		}
	</Container>


}
