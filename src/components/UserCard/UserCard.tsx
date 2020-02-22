import React from 'react'

import { User } from 'entities'
import {
	SimpleText,
	Container,
	UserDescriptionText,
	UserFieldRow,
	UserFieldsColumn,
	UserFieldText,
	UserImage,
	ActivitiesCountHolder,
	ActivitiesText,

	TypeIconsHolder,
	TypeIcon,
} from './UserCard.styles'

interface UserCardsProps {
	user: User
}

export default function UserCard(
	{
		user,
	}: UserCardsProps,
) {

	return (
		<Container>
			<UserFieldRow>
				<UserImage
					source={{ uri: user.image_url }}
				/>
				<UserFieldsColumn>
					<UserFieldRow>
						<SimpleText>
							Name:
						</SimpleText>
						<UserFieldText>
							{user.name}
						</UserFieldText>
					</UserFieldRow>
					<UserFieldRow>
						<SimpleText>
							Activities:
						</SimpleText>
						<ActivitiesCountHolder>
							<ActivitiesText>
								{user.activitiesCount}
							</ActivitiesText>
						</ActivitiesCountHolder>
					</UserFieldRow>
				</UserFieldsColumn>
			</UserFieldRow>
			<UserFieldRow>
				<SimpleText>
					Email:
				</SimpleText>
				<UserFieldText>
					{user.email}
				</UserFieldText>
			</UserFieldRow>
			<UserFieldRow>
				<UserDescriptionText>
					{user.description}
				</UserDescriptionText>
			</UserFieldRow>
			<TypeIconsHolder>
				{
					user
						.types
						.map(type => (
							<TypeIcon
								key={type.id}
								type={type}
							/>
						))
				}
			</TypeIconsHolder>
		</Container>
	)
}
