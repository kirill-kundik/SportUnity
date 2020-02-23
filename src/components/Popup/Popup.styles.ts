import styled from 'styled-components/native'

import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	
	background: rgba(0, 0, 0, 0.15);
`
