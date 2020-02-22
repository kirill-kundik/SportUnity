import React from 'react'
import {
	Container,
	StyledMapView,
} from './Map.styles'
import {View} from 'react-native'
import Text from 'components/Text'
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps'

const markers = [
	{
		latlng: {
			lat: 37.78825,
		},
	},
]

export default function MapTab() {
	return <Container>
		<StyledMapView
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		>
			<Marker
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324,
				}}
				title={'Marker'}
				description={'Description'}
			/>
		</StyledMapView>
	</Container>
}
