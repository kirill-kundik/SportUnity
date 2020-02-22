import { createAppContainer } from 'react-navigation'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import Navigation from 'containers/Navigation'

const AppWithNavigation = createAppContainer(Navigation)

AppRegistry.registerComponent(appName, () => AppWithNavigation)
