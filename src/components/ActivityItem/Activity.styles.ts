import styled from 'styled-components/native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Text from 'components/Text'
import Colors from '../../themes/Colors'

export const Container = styled.View`
	padding-top: ${ifIphoneX(50, 20)}px;
	justify-content: flex-end;
	position: relative;
`

export const Title = styled(Text)`
	text-align: center;
	margin: 14px;
	font-size: 20px;
	font-weight: bold;
	color: white;
`

export const LeftButtonHolder = styled.TouchableOpacity`
	padding: 0 10px;
`

export const RightComponentHolder = styled.View`
  position: absolute;
  bottom: 10px;
  right: 15px;
`

export const LeftIcon = styled(AwesomeIcon)`
	padding: 0 10px
`

export const ImageHeaderMinHeight = ifIphoneX(100, 70)
export const ImageHeaderMaxHeight = 230

export const ImageHeader = styled.Image`
	width: 100%;
	height: ${ImageHeaderMaxHeight}px;
`
