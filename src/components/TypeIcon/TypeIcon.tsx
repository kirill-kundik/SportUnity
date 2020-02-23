import React from 'react'

import { Type } from 'entities'
import {
	Container,
	Icon,
	TypeText,
} from './TypeIcon.styles'

interface TypeIconProps {
	type: Type
}

export default function TypeIcon(
	{
		type,
		...rest
	}: TypeIconProps,
) {

	return (
		<Container {...rest}>
			<Icon
				source={{ uri: type.image_url }}
			/>
			<TypeText>
				{type.label}
			</TypeText>
		</Container>
	)
}
