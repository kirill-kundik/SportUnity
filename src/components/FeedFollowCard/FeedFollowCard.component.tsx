import React from 'react'
import {
	Row,
	RowText,
	UserLogo,
	UserName,
	User as UserComponent,
	Wrapper,
	Timestamp,
} from './FeedFollowCard.styles'
import {User} from 'entities'

interface ActivityCardProps {
	follower: User,
	following: User,
	timestamp: string,
	onUserClick: (userId: number) => void
}

export default function FeedFollowCard(
	{
		follower,
		following,
		timestamp,
		onUserClick,
		...rest
	}: ActivityCardProps
) {
	console.log(rest)
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
				<UserComponent onPress={() => onUserClick(follower.id)}>
					<UserLogo source={{uri: follower.image_url}} />
					<UserName>{follower.name}</UserName>
				</UserComponent>
			</Row>
			<Row>
				<RowText>started following</RowText>
				<UserComponent onPress={() => onUserClick(following.id)}>
					<UserLogo source={{uri: following.image_url}} />
					<UserName>{following.name}</UserName>
				</UserComponent>
			</Row>
			<Timestamp>{timestampString}</Timestamp>
		</Wrapper>
	)
}
