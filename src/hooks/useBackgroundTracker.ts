import { useEffect } from 'react'

import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'

interface BackgroundTrackerProps {
	baseUrl: string,
	userId: number
}

export default function useBackgroundTracker(
	{
		userId,
		baseUrl,
	}: BackgroundTrackerProps,
) {

	// Initial mount
	useEffect(() => {
		BackgroundGeolocation.configure({
			desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
			locationProvider: BackgroundGeolocation.RAW_PROVIDER,
			stationaryRadius: 1,
			distanceFilter: 20,
			debug: true,

			stopOnTerminate: true,
			startOnBoot: false,
			interval: 10000,
			fastestInterval: 5000,
			activitiesInterval: 5000,

			url: `${baseUrl}/track_geo`,
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
	}, [userId, baseUrl])

	return [BackgroundGeolocation.start, BackgroundGeolocation.stop]
}
