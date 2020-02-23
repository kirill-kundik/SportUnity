import React from 'react'
import {
	Row,
	RowText,
	UserLogo,
	UserName,
	User as UserComponent,
	Wrapper,
	Timestamp,
} from './FeedActivityCard.styles'
import {Activity, User} from 'entities'
import ActivityCard from "../ActivityCard";
import {useActionApi} from "../../hooks";
import Api from "../../api";
import {Alert} from "react-native";

interface ActivityCardProps {
	activity: Activity,
	user: User,
	timestamp: string,
	status: string,
	onUserClick: (userId: number) => void,
	onMoreClick: (userId: number) => void,
}

export default function FeedActivityCard(
	{
		activity,
		user,
		timestamp,
		onUserClick,
		onMoreClick,
		status,
		...rest
	}: ActivityCardProps
) {
	const timestampString = new Date(timestamp).toLocaleString(
		'default',
		{
			hour: '2-digit',
			minute: '2-digit',
			month: 'short',
			day: 'numeric',
			hour12: false,
		})

	const [copyActivityLoading, copyActivityError, copyActivity] = useActionApi({
		apiMethod: Api.copyActivity,
		onSuccess: () => {
			Alert.alert('Activity added (forked) to your account!')
		},
		onError: (err) => {
			console.log(err)
			Alert.alert('Something went wrong.')
		},
	})

	return (
		<Wrapper {...rest} >
			<Row>
				<RowText>User</RowText>
				<UserComponent onPress={() => onUserClick(user.id)}>
					<UserLogo source={{uri: user.image_url}} />
					<UserName>{user.name}</UserName>
				</UserComponent>
				<RowText>{status} activity</RowText>
			</Row>
			<ActivityCard
				activity={activity}
				onBtnClick={() => {
					copyActivity({userId: user.id, activityId: activity.id})
				}}
				btnText={'Add to my activities'}
			/>
		</Wrapper>
	)
}
