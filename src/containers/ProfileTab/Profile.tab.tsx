import React, { useEffect } from 'react'

import { usePersistedState, usePersistedApi } from 'hooks'
import { User } from 'entities'
import Api from 'api'

import UserCard from 'components/UserCard'
import Popup from 'components/Popup'
import Loading from 'components/Loading'
import constants from 'constants'

import {
	Container,
	UserIdPicker,
	UserIdPickerItem,
	SimpleText,
	IdRow,
	UserHolder,
} from './Profile.styles'

export default function ProfileTab() {
	const [selectedUserId, setSelectedUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [user, userLoading, userError, fetchUser] = usePersistedApi({
		apiMethod: Api.getUser,
		entityName: constants.user,
		initialValue: {} as User,
	})

	useEffect(() => {
		fetchUser(selectedUserId as number)
	}, [fetchUser, selectedUserId])

	// const userMock: User = {
	// 	id: 0,
	// 	name: 'Sasha',
	// 	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	// 	email: 'sasha26.05.2012@gmail.com',
	// 	image_url: 'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png',
	// 	types: [
	// 		{
	// 			id: 0,
	// 			label: 'Bicycling',
	// 			image_url: 'https://cdn0.iconfinder.com/data/icons/travel-circular-3/90/136-512.png',
	// 		},
	// 		{
	// 			id: 1,
	// 			label: 'Running',
	// 			image_url: 'data:image/png;base64,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',
	// 		},
	// 	],
	// 	activities_count: 16,
	// }

	const availableUserIds = []
	for (let i = 1; i < 200; ++i) {
		availableUserIds.push(i)
	}

	return (
		<>
			<Container>
				<IdRow>
					<SimpleText>
						Your user Id:
					</SimpleText>
					<UserIdPicker
						selectedValue={selectedUserId}
						onValueChange={setSelectedUserId}
					>
						{
							availableUserIds
								.map((userId) => (
									<UserIdPickerItem
										key={userId}
										label={`${userId}`}
										value={`${userId}`}
									/>
								))
						}
					</UserIdPicker>
				</IdRow>
				<UserHolder>
					<UserCard
						user={user}
					/>
				</UserHolder>
			</Container>
			<Popup
				opened={userLoading}
			>
				<Loading />
			</Popup>
		</>
	)
}
