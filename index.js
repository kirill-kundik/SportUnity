import { createAppContainer } from 'react-navigation'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import Navigation from 'containers/Navigation'
import createStore from './src/reduxStore/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'

const AppWithNavigation = createAppContainer(Navigation)

const { store, persistor } = createStore()

AppRegistry.registerComponent(appName, () => () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<AppWithNavigation />
		</PersistGate>
	</Provider>
))
