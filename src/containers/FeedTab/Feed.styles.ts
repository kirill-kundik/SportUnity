import styled from 'styled-components/native'

import Text from 'components/Text'

export const Container = styled.View`
	align-self: center;
	justify-content: center;
	flex: 1;
`

export const WinnerText = styled(Text)`
	font-style: italic;
	font-weight: bold;
	font-size: 40px;
	color: white;
`

export const ScoreText = styled(Text)`
	font-style: italic;
	font-weight: bold;
	font-size: 75px;
	color: white;
	text-align: center;
`
