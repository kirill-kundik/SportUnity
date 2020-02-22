/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Navigation from 'containers/Navigation'
import { name as appName } from './app.json'
import { createAppContainer } from 'react-navigation'

const AppWithNavigation = createAppContainer(Navigation)

AppRegistry.registerComponent(appName, () => AppWithNavigation)
