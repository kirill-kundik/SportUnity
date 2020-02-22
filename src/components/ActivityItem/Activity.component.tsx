import React from 'react'
import {
	Container,
	Title,
} from './Activity.styles'


interface HeaderProps {
	title: string
}

export default function Header(
	{
		title,
		...props
	}: HeaderProps
) {
	return (
		<Container {...props}>
			{title && <Title children={title} />}
		</Container>
	)
}
