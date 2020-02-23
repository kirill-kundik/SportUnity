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
				}}
				btnText={'Add to my activities'}
			/>
		</Wrapper>
	)
}
