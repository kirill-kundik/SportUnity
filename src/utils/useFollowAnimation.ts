import React, { useCallback, useEffect, useMemo } from 'react'
import { Animated } from 'react-native'

interface CreateAnimConfig {
	initValue?: number,

	overshootClamping?: boolean;
	restDisplacementThreshold?: number;
	restSpeedThreshold?: number;
	velocity?: number | { x: number; y: number };
	bounciness?: number;
	speed?: number;
	tension?: number;
	friction?: number;
	stiffness?: number;
	mass?: number;
	damping?: number;
	delay?: number;
	isInteraction?: boolean;
	useNativeDriver?: boolean;
}

export default function useFollowAnimation(config: CreateAnimConfig = {}) {
	const initValue = config.initValue || 0
	const current = useMemo(() => new Animated.Value(initValue), [initValue])
	const goal = useMemo(() => new Animated.Value(initValue), [initValue])

	const setGoal = useCallback((newGoal: number) => {
		goal.setValue(newGoal)
	}, [goal])

	useEffect(() => {
		const animation = Animated.spring(current, {
			toValue: goal,
			useNativeDriver: true,
			isInteraction: false,
			overshootClamping: true,
			...config,
		})
		animation.start()
		return () => animation.stop()
	}, [current, goal, config])

	return [current, setGoal] as [Animated.Value, (newGoal: number) => any]
}
