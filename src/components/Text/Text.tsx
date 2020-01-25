import React, { memo } from 'react'
import { TextProps } from 'react-native'

import { AnimatedText, SimpleText } from './Text.styles'

interface IntTextProps extends TextProps {
	animated?: boolean,
	children?: any,
}

export default memo(function Text(
	{
		animated,
		...props
	}: IntTextProps,
) {

	return animated
		? (
			<AnimatedText {...props} />
		)
		: (
			<SimpleText {...props} />
		)
})
