import styled from 'styled-components/native'
import MapView from 'react-native-maps'

import Text from 'components/Text'
import { CustomPicker } from 'react-native-custom-picker'

export const Container = styled.View`
	flex: 1;
	position: relative;
`

export const StyledMapView = styled(MapView)`
	flex: 1;
	width: 100%;
`

export const TypeMarkerImage = styled.Image.attrs({
	resizeMode: 'cover',
})`
	width: 40px;
	height: 40px;
	border-radius: 20px;
`

export const ControlRow = styled.View`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

interface StartTrackButton {
	isStop: boolean
}

export const StartTrackButton = styled.TouchableOpacity<StartTrackButton>`
	background: ${(({ isStop }) => isStop ? 'red' : 'forestgreen')};
	padding: 18px 40px;
	border-radius: 22px;
`

export const StartTrackText = styled(Text)`
	color: white;
	font-size: 30px;
	font-weight: bold;
`

export const TypeHolder = styled.View`
	margin-right: 40px;
	border-radius: 20px;
	padding: 10px;
	background: white;
`

export const TypesPicker = styled(CustomPicker).attrs({
	modalStyle: {
		borderRadius: 30,
		overflow: 'hidden',
	},
})``
