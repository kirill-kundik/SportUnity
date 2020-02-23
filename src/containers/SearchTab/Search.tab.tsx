import React, { useCallback, useState } from 'react'

import { User } from 'entities'
import { useApi } from 'hooks'
import Api from 'api'

import UserCard from 'components/UserCard'
import {
	Container,
	SubmitButton,
	SubmitText,
	TextInput,
	ContentBlock,
} from './Search.styles'

export default function SearchTab(
	{ navigation }: { navigation: any },
) {
	const [foundUsers, usersLoading, usersError, findUsers] = useApi({
		apiMethod: Api.findUsers,
		initialValue: [],
	})

	const [enteredText, setEnteredText] = useState('')
	const onSubmit = (text: string) => {
		findUsers(text)
	}

	console.log({ foundUsers })

	return <Container>
		<TextInput
			onChangeText={useCallback((text) => {
				setEnteredText(text)
			}, [setEnteredText])}
		/>
		<SubmitButton
			onPress={useCallback(() => {
				onSubmit(enteredText)
			}, [enteredText])}
		>
			<SubmitText
			>
				Submit
			</SubmitText>
		</SubmitButton>
		{
			foundUsers
				.map((user: User) => (
					<ContentBlock
						onPress={() => {
							navigation.navigate('UserDetails', {
								userId: user.id,
							})
						}}
					>
						<UserCard
							key={user.id}
							user={user}
						/>
					</ContentBlock>
				))
		}
	</Container>
}
