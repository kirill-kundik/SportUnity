import React, { useEffect } from 'react'

import { useActionApi, useBackgroundTracker } from 'hooks'
import Api from 'api'

import Background from 'components/Background'
import Popup from 'components/Popup/Popup'
import Loading from 'components/Loading'
import Text from 'components/Text'
import {
	StatusBar,
} from 'react-native'
import {
	Container,
} from './App.styles'

export default function App() {

	const [trackLoading, trackError, trackGeo] = useActionApi({
		apiMethod: Api.trackGeo,
	})

	const [startLocationTracking, endLocationTracking] = useBackgroundTracker({
		userId: 123,
		baseUrl: Api.baseUrl,
	})

	return (
		<>
			<StatusBar
				barStyle={'light-content'}
			/>
			<Container>
				<Background />
				<Popup
					opened={trackLoading}
				>
					<Loading />
				</Popup>
				<Text>
					{trackError && JSON.stringify(trackError)}
				</Text>
			</Container>
		</>
	)
}
