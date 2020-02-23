import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MapTab from 'containers/MapTab'
import FeedTab from 'containers/FeedTab'
import SearchTab from 'containers/SearchTab'
import ProfileTab from 'containers/ProfileTab'
import ActivitiesTab from 'containers/ActivitiesTab'
import ActivityDetailsTab from 'containers/ActivityDetailsTab'
import {createStackNavigator} from 'react-navigation-stack'
import UserTab from 'containers/UserTab'

export default createStackNavigator(
	{
		MainTabs: createBottomTabNavigator(
			{
				Feed: FeedTab,
				Activities: ActivitiesTab,
				Map: MapTab,
				Search: SearchTab,
				Profile: ProfileTab,
			}, {
				lazy: true,
				tabBarOptions: {
					style: {
						height: 65,
					},
				},
				defaultNavigationOptions: ({navigation}: { navigation: any }) => ({
					tabBarIcon: ({focused, tintColor}) => {
						const {routeName} = navigation.state

						if (routeName === 'Map') {
							return <Feather name={'map-pin'} size={30} color={tintColor} />
						}
						if (routeName === 'Feed') {
							return <MaterialCommunityIcons name={'newspaper'} size={35} color={tintColor} />
						}
						if (routeName === 'Activities') {
							return <Feather name={'activity'} size={30} color={tintColor} />
						}
						if (routeName === 'Search') {
							return <Feather name={'search'} size={30} color={tintColor} />
						}
						return <MaterialCommunityIcons name={'account-circle-outline'} size={32} color={tintColor} />
					},
				}),
				order: ['Feed', 'Search', 'Map', 'Activities', 'Profile'],
			},
		),
		ActivityDetails: ActivityDetailsTab,
		UserDetails: UserTab,
	}
)
// //
// // function ActivitiesScreen() {
// // 	return (
// // 		<ActivitiesStack.Navigator>
// // 			<ActivitiesStack.Screen name="tab" component={ActivitiesTab} />
// // 			<ActivitiesStack.Screen name="details" component={UserTab} />
// // 		</ActivitiesStack.Navigator>
// // 	)
// // }
