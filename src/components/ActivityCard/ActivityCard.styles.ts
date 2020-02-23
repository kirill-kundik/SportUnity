import styled from 'styled-components/native'
import Text from 'components/Text'
import {View, Image} from 'react-native'

interface WrapperProps {
	underline?: string
}

interface SaveButtonProps {
	color: string
}

export const Wrapper = styled(View)<WrapperProps>`
	flex-direction: row;
	box-shadow: 0 5px 10px rgba(163,163,163,0.5);
	background: white;
	padding: 15px 0 12px;
	border-bottom-width: 3px;
	border-bottom-color: ${({underline}) => underline};
	border-radius: 10px;
	margin-bottom: 15px;
`

export const LeftColumn = styled.View`
	flex: 0.3;
	border-color: rgba(71,71,71,0.3);
	border-right-width: 1px;
	padding: 0 15px;
	justify-content: space-between;
`

export const InfoColumn = styled.View`
	padding-left: 15px;
	padding-right: 15px;
	flex: 0.7;
	justify-content: space-between;
`

export const StartDate = styled.View`
	padding: 0 0 10px;
	align-items: center;
		text-align: center;
	border-color: rgba(71,71,71,0.3);
	border-bottom-width: 1px;
`

export const StartDateLabel = styled(Text)`
	font-size: 13px;
`

export const StartDateTime = styled(Text)`
	font-size: 25px;
	font-weight: 700;
`

export const StartDateDate = styled(Text)`
	font-size: 16px;
	font-weight: 500;
`

export const EndDate = styled.View`
	padding: 10px 0 0;
	align-items: center;
	text-align: center;
`

export const EndDateLabel = styled(Text)`
	font-size: 13px;
	font-weight: 600;
`

export const EndDateInfo = styled(Text)`
	font-size: 12px;
	font-weight: 400;
`

export const Name = styled(Text)`
	font-size: 22px;
	font-weight: 600;
`

export const Description = styled(Text)`
	font-size: 14px;
	font-weight: 400;
	padding-top: 8px;
`

export const Status = styled.View`
	padding-top: 14px;
	flex-direction: row;
	align-items: center;
`

export const StatusLabel = styled(Text)`
	font-size: 16px;
	font-weight: 600;
`

export const StatusInfo = styled(Text)`
	font-size: 15px;
	font-weight: 400;
	margin-left: 5px;
`

export const SaveButton = styled.TouchableOpacity<SaveButtonProps>`
	background: ${({color}) => color};
	border-radius: 4px;
	
	align-items: center;
	width: 100%;
	height: 35px;
	margin-top: 10px;
	justify-content: center;
`

export const SaveButtonText = styled(Text)`
	font-size: 18px;
	font-weight: 600;
	color: white;
`

export const TypeBadge = styled.View`
	padding: 10px 0;
	align-items: center;
	text-align: center;
	border-color: rgba(71,71,71,0.3);
	border-bottom-width: 1px;
`


export const TypeBadgeLabel = styled(Text)`
	font-size: 16px;
	font-weight: 600;
	margin-top: 5px;
`

export const TypeBadgeIcon = styled(Image)`
	width: 45px;
	height: 45px;
	resizeMode: cover;
`
