import React from 'react'

import {TouchableOpacity} from 'react-native'
import {Container} from './Feed.styles'
import Text from 'components/Text'

export default function FeedTab(props: any) {

	return <Container>
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('ActivityDetails')
			}}
		>
			<Text>Feed</Text>
		</TouchableOpacity>
	</Container>
}
