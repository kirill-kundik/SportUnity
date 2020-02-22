import React, { useCallback, useEffect, useState } from 'react'

import { useActionApi } from 'utils'
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

	useEffect(() => {
		trackGeo({
			lat: 30.4,
			lng: 50.2,
		})
	}, [trackGeo])

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
