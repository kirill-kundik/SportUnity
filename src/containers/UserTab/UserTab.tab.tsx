import React, {useCallback, useEffect} from 'react'
import Loading from 'components/Loading'
import {useActionApi, useApi, usePersistedState} from 'hooks'
import Api from 'api'
import UserCard from 'components/UserCard'
import {Container, SubscribeButton, SubscribeButtonText, UserBlock, UserText} from './UserTab.styles'
import constants from 'constants'
import {Alert} from 'react-native'

export default function UserTab(props: any) {
	const navUserId = props.navigation.state.params.userId

	const [myUserId, seMyUserId] = usePersistedState({
		entityName: constants.userId,
	})

	const [user, userLoading, userError, fetchUser] = useApi({
		apiMethod: Api.getUser,
		initialValue: {},
	})

	const [followUserLoading, followUserError, followUser] = useActionApi({
		apiMethod: Api.followUser,
		onSuccess: () => {
			Alert.alert('Successfully subscribed!')
		},
		onError: (err) => {
			console.log(err)
			Alert.alert('You are already subscribed to this user. Or something went wrong.' +
				'')
		},
	})

	useEffect(() => {
		fetchUser(navUserId)
	}, [fetchUser, navUserId])

	return <Container>
		{user ?
			<>
				<UserBlock>
					<UserCard
						user={user}
					/>
					<SubscribeButton onPress={() => {
						followUser({
							userId: myUserId,
							followingId: user.id,
						})
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
