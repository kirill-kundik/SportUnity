import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import React, { useEffect } from 'react'


import { useActionApi, useBackgroundTracker } from 'hooks'
import createStore from 'reduxStore'
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


const { store, persistor } = createStore()

export default function App() {

	const [startLocationTracking, endLocationTracking] = useBackgroundTracker({
		userId: 123,
		baseUrl: Api.baseUrl,
	})

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<StatusBar
					barStyle={'light-content'}
				/>
				<Container>
					<Background />
				</Container>
			</PersistGate>
		</Provider>
	)
}
