import { useEffect } from 'react'

import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'

interface BackgroundTrackerProps {
	trackUrl: string,
	userId: number
}

export default function useBackgroundTracker(
	{
		userId,
		trackUrl,
	}: BackgroundTrackerProps,
) {

	// Initial mount
	useEffect(() => {
		BackgroundGeolocation.configure({
			desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
			locationProvider: BackgroundGeolocation.RAW_PROVIDER,
			stationaryRadius: 1,
			distanceFilter: 4,
			debug: true,

			stopOnTerminate: true,
			startOnBoot: false,
			interval: 10000,
			fastestInterval: 5000,
			activitiesInterval: 5000,

			url: trackUrl,
			syncThreshold: '10',
			postTemplate: {
				lat: '@latitude',
				lon: '@longitude',
				userId,
			},

			notificationTitle: 'Flashback is tracking you!',
			notificationText: 'Flashback is tracking you!',

			// IOS
			activityType: 'AutomotiveNavigation',
			pauseLocationUpdates: false,
			saveBatteryOnBackground: false,

			notificationsEnabled: false,
		})
	}, [userId, trackUrl])

	return [BackgroundGeolocation.start, BackgroundGeolocation.stop]
}
