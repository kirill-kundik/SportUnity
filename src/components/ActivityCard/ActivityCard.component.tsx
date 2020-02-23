import React from 'react'
import {
	Wrapper,
	LeftColumn,
	StartDate,
	StartDateLabel,
	InfoColumn,
	StartDateTime,
	StartDateDate,
	Name,
	Description,
	Status,
	StatusInfo,
	StatusLabel,
	SaveButton,
	SaveButtonText,
	EndDate,
	EndDateLabel,
	EndDateInfo,
	TypeBadge,
	TypeBadgeIcon,
	TypeBadgeLabel,
} from './ActivityCard.styles'
import {View} from 'react-native'
import {Activity, ActivityStatus} from 'entities'

interface ActivityCardProps {
	activity: Activity,
	isInFeed?: boolean
}

const timeFormat = {
	hour: '2-digit',
	minute: '2-digit',
}
const dateFormat = {
	month: 'short',
	day: 'numeric',
}

export default function ActivityCard(
	{
		activity,
		isInFeed,
		...rest
	}: ActivityCardProps
) {
	let startDateObj = new Date(activity.expected_start)
	let startDateText = 'Starting at'
	if (activity.status !== ActivityStatus.NOT_STARTED && activity.start_time) {
		startDateObj = new Date(activity.start_time)
		startDateText = 'Started at'
	}
	const startTime = startDateObj.toLocaleString('default', timeFormat)
	const startDate = startDateObj.toLocaleString('default', dateFormat)
	// const startDateText =


	let endTime
	if (activity.status === ActivityStatus.FINISHED && activity.end_time) {
		endTime = new Date(activity.end_time)
			.toLocaleString(
				'default',
				{
					hour: '2-digit',
					minute: '2-digit',
					month: 'short',
					day: 'numeric',
				})
	}


	return (
		<Wrapper underline={activity.type.color} {...rest}>
			<LeftColumn>
				<StartDate>
					<StartDateLabel>{startDateText}</StartDateLabel>
					<StartDateTime>{startTime}</StartDateTime>
					<StartDateDate>{startDate}</StartDateDate>
				</StartDate>
				<TypeBadge>
					<TypeBadgeIcon source={{uri: activity.type.image_url}} />
					<TypeBadgeLabel>{activity.type.label}</TypeBadgeLabel>
				</TypeBadge>
				{endTime && <EndDate>
          <EndDateLabel>Ended at:</EndDateLabel>
          <EndDateInfo>{endTime}</EndDateInfo>
        </EndDate>}
			</LeftColumn>
			<InfoColumn>
				<View>
					<Name>{activity.name}</Name>
					<Description>{activity.description}</Description>
				</View>
				<View>
					<Status>
						<StatusLabel>Status:</StatusLabel>
						<StatusInfo>{activity.status}</StatusInfo>
					</Status>
					{
						isInFeed &&
            <SaveButton color={activity.type.color}>
              <SaveButtonText>Save</SaveButtonText>
            </SaveButton>
					}
				</View>
			</InfoColumn>
		</Wrapper>
	)
}
