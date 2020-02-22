import { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import React, { useState } from 'react'
import { last } from 'lodash'

import { Geo, RecentUserActivity } from 'entities'
import TypeIcon from 'components/TypeIcon'
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

const nearby: Array<RecentUserActivity> = []
for (let i = 0; i < 5; ++i) {
	const userLocations = []
	for (let j = 0; j < 10; ++j) {
		userLocations.push({
			lat: 50 + (Math.random() - 0.5) / 10,
			lng: 30 + (Math.random() - 0.5) / 10,
		})
	}
	nearby.push({
		user_id: i,
		color: ({
			0: 'red',
			1: 'blue',
			2: 'green',
			3: 'purple',
			4: 'magenta',
		} as any)[i] as string,
		image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg',
		locations: userLocations,
	})
}

export default function MapTab() {

	function mapCoordinate(geo: Geo) {
		return ({
			latitude: geo.lat,
			longitude: geo.lng,
		})
	}

	const allTypes = [
		{
			id: 0,
			label: 'cycling',
			image_url: 'https://lh3.googleusercontent.com/proxy/lbyDqOXXCwIHCYX7Vveg8VsCpKPM0zdl_4wugu5KVhl-okS55Zx4fk8VB83_rQR0-JjsNnRSt9RM5Zs76XHV9_lD9sU4f4mpCPiMs9VqnqmLAarP3jOA6OO13B4i9Tc',
		},
		{
			id: 1,
			label: 'running',
			image_url: 'https://lh3.googleusercontent.com/proxy/lbyDqOXXCwIHCYX7Vveg8VsCpKPM0zdl_4wugu5KVhl-okS55Zx4fk8VB83_rQR0-JjsNnRSt9RM5Zs76XHV9_lD9sU4f4mpCPiMs9VqnqmLAarP3jOA6OO13B4i9Tc',
		},
		{
			id: 2,
			label: 'skiing',
			image_url: 'https://lh3.googleusercontent.com/proxy/lbyDqOXXCwIHCYX7Vveg8VsCpKPM0zdl_4wugu5KVhl-okS55Zx4fk8VB83_rQR0-JjsNnRSt9RM5Zs76XHV9_lD9sU4f4mpCPiMs9VqnqmLAarP3jOA6OO13B4i9Tc',
		},
	]
	const [selectedType, setSelectedType] = useState(allTypes[0])

	return (
		<Container>
			<StyledMapView
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					latitude: 50,
					longitude: 30,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				{
					nearby
						.map(userActivity => (
							<Polyline
								key={userActivity.user_id}
								coordinates={userActivity.locations.map(mapCoordinate)}
								strokeColor={userActivity.color}
							/>
						))
				}
				{
					nearby
						.map(userActivity => {
							const lastLocation = last(userActivity.locations)

							return (
								<Marker
									key={userActivity.user_id}
									coordinate={mapCoordinate(lastLocation as any)}
									title={`User ${userActivity.user_id}`}
								>
									<TypeMarkerImage
										source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg' }}
									/>
								</Marker>
							)
						})
				}
			</StyledMapView>
			<ControlRow>
				<TypesPicker
					fieldTemplate={({ selectedItem, defaultText, getLabel, clear }) => (
						<TypeHolder>
							<TypeIcon
								type={selectedItem || selectedType}
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
					onValueChange={value => {

					}}
				/>
				<StartTrackButton>
					<StartTrackText>
						Start
					</StartTrackText>
				</StartTrackButton>
			</ControlRow>
		</Container>
	)
}
