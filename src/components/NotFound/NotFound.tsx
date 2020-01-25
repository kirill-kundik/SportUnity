import React, { useEffect } from 'react'

import {
	NotFoundText,
} from './NotFound.styles'

interface NotFoundProps {
	key?: any,
	onClose: () => any,
}

export default function NotFound(
	{
		onClose,
	}: NotFoundProps,
) {
	useEffect(() => {
		const timeout = setTimeout(onClose, 2000)
		return () => clearTimeout(timeout)
	}, [onClose])

	return (
		<NotFoundText>
			Not Found 😢
		</NotFoundText>
	)
}
