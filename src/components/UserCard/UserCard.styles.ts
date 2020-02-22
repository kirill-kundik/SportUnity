import styled from 'styled-components/native'

import TypeIconOriginal from 'components/TypeIcon'
import Text from 'components/Text'

export const Container = styled.View`
	display: flex;
	flex-direction: column;
`

export const SimpleText = styled(Text)`
	font-size: 20px;
`

export const UserImage = styled.Image.attrs({
	resizeMode: 'contain',
})`
	width: 140px;
	height: 140px;
	margin: 10px;
`

export const UserFieldsColumn = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const UserFieldRow = styled.View`
	align-self: stretch;
	
	margin: 10px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;	
	justify-content: space-between;
`

export const UserFieldText = styled(SimpleText)`
	font-weight: 500;
	margin-left: 10px;
`

export const UserDescriptionText = styled(UserFieldText)`
	font-size: 14px;
	flex: 1;
	text-align: justify;
`

export const TypeIconsHolder = styled(UserFieldRow)`
	justify-content: center;
	flex-wrap: wrap;
`

export const TypeIcon = styled(TypeIconOriginal)`
	margin: 0 10px 0 10px
`

export const ActivitiesCountHolder = styled.View`
	background: mediumturquoise;
	width: 42px;
	height: 42px;
	border-radius: 15px;
	margin-left: 5px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
`

export const ActivitiesText = styled(Text)`
	color: white;
	font-weight: bold;
	font-size: 22px;
	text-align: center;
`
