import React, {useEffect} from 'react'
import Loading from 'components/Loading'
import {useApi} from 'hooks'
import Api from 'api'
import UserCard from 'components/UserCard'
import {Container, SubscribeButton, SubscribeButtonText, UserBlock, UserText} from './UserTab.styles'

export default function UserTab(props: any) {
	const navUserId = props.navigation.state.params.userId

	const [user, userLoading, userError, fetchUser] = useApi({
		apiMethod: Api.getUser,
		initialValue: {},
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
