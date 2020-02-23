import BackgroundGeolocation from '@mauron85/react-native-background-geolocation'
import { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import React, { useCallback, useEffect, useState } from 'react'

import { usePersistedApi, useActionApi, usePersistedState, useBackgroundTracker, useApi } from 'hooks'
import constants from 'constants'
import Api from 'api'

import { Geo, RecentUserActivity, Type } from 'entities'
import TypeIcon from 'components/TypeIcon'
import Loading from 'components/Loading'
import Popup from 'components/Popup'
import {
	Container,
	StyledMapView,
	TypeMarkerImage,

	ControlRow,
	StartTrackButton,
	StartTrackText,
	TypeHolder,

	TypesPicker,
} from './Map.styles'

export default function MapTab() {

	const [selectedType, setSelectedType] = useState<Type>()
	const [initialLocation, setInitialLocation] = useState<Geo>()

	const userId = usePersistedState({
		entityName: constants.userId,
		initialValue: 1,
	})[0]

	const [allTypes, allTypesLoading, allTypesError, getAllTypes] = usePersistedApi({
		apiMethod: Api.getTypeList,
		entityName: constants.types,
		initialValue: [],
	})
	const [isTracking, isTrackingLoading, isTrackingError, getTrackingState] = usePersistedApi({
		apiMethod: Api.isTracking,
		entityName: constants.isTracking,
		initialValue: false,
	})
	const [startTrackLoading, startTrackError, startTracking] = useActionApi({
		apiMethod: Api.startTrackByType,
		onSuccess: useCallback(() => {
			getTrackingState({ userId })
		}, [getTrackingState, userId]),
		onError: useCallback((error) => {
			console.log('on error', error)
		}, []),
	})
	const [stopTrackLoading, stopTrackError, stopTracking] = useActionApi({
		apiMethod: Api.stopTracking,
		onSuccess: useCallback(() => {
			getTrackingState({ userId })
		}, [getTrackingState, userId]),
		onError: useCallback((error) => {
			console.log('on error', error)
		}, []),
	})
	const [startBackgroundTracking, stopBackgroundTracking] = useBackgroundTracker({
		userId,
		trackUrl: `${Api.baseUrl}/track`,
	})

	const [nearby, nearbyLoading, nearbyError, getNearby] = useApi({
		apiMethod: Api.getNearby,
		initialValue: [] as Array<RecentUserActivity>,
	})

	useEffect(() => {
		getAllTypes({})
		getTrackingState({ userId })
	}, [getAllTypes, getTrackingState, userId])

	useEffect(() => {
		if (!selectedType && allTypes?.length) {
			setSelectedType(allTypes[0])
		}
	}, [selectedType, allTypes, setSelectedType])

	useEffect(() => {
		if (isTracking) {
			startBackgroundTracking()
		} else {
			stopBackgroundTracking()
		}
	}, [isTracking, startBackgroundTracking, stopBackgroundTracking])

	useEffect(() => {
		function recursiveGet() {
			return getNearby({})
				.then(() =>
					new Promise(
						(resolve) => setTimeout(resolve, 8000),
					),
				)
				.then(recursiveGet)
		}

		return recursiveGet()
	}, [getNearby])


	useEffect(() => {
		BackgroundGeolocation.getCurrentLocation(
			(location) => {
				if (!initialLocation) {
					setInitialLocation({
						lat: location.latitude,
						lon: location.longitude,
					})
				}
			},
		)
	}, [initialLocation, setInitialLocation])

	return (
		<>
			<Container>
				<StyledMapView
					key={initialLocation as any}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: initialLocation?.lat || 50,
						longitude: initialLocation?.lon || 30,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					{
						nearby
							.map((userActivity: RecentUserActivity) => (
								<Polyline
									key={userActivity.user_id}
									coordinates={userActivity.locations.map(mapCoordinate).filter(a => !!a)}
									strokeColor={userActivity.color}
									strokeWidth={6}
								/>
							))
					}
					{
						nearby
							.map((userActivity: RecentUserActivity) => {
								const lastLocation = userActivity.locations[0]
								const coordinate = mapCoordinate(lastLocation as any)

								return (
									!!coordinate && <Marker
										key={userActivity.user_id}
										coordinate={mapCoordinate(lastLocation as any)}
										title={`User ${userActivity.user_id}`}
										anchor={{ x: 0.5, y: 0.5 }}
									>
										<TypeMarkerImage
											source={{ uri: userActivity.image_url }}
										/>
									</Marker>
								)
							})
					}
				</StyledMapView>
				<ControlRow>
					<TypesPicker
						fieldTemplate={({ selectedItem }) => (
							<TypeHolder>
								<TypeIcon
									type={selectedItem || selectedType || {}}
								/>
							</TypeHolder>
						)}
						optionTemplate={({ item }) => (
							<TypeHolder>
								<TypeIcon
									type={item}
								/>
							</TypeHolder>
						)}
						options={allTypes}
						onValueChange={setSelectedType}
					/>
					<StartTrackButton
						isStop={isTracking}
						onPress={useCallback(() => {
							if (!isTracking) {
								startTracking(
									{
										userId,
										type: selectedType as Type,
									},
								)
							} else {
								stopTracking({
									userId,
								})
							}
						}, [isTracking, startTracking, stopTracking, userId, selectedType])}
					>
						<StartTrackText>
							{isTracking ? 'Stop' : 'Start'}
						</StartTrackText>
					</StartTrackButton>
				</ControlRow>
			</Container>
			<Popup
				opened={allTypesLoading || isTrackingLoading || startTrackLoading || stopTrackLoading}
			>
				<Loading />
			</Popup>
		</>
	)
}

function mapCoordinate(geo: Geo) {
	return (geo?.lat && geo?.lon) ?
		({
			latitude: +geo?.lat,
			longitude: +geo?.lon,
		}) : null as any
}
