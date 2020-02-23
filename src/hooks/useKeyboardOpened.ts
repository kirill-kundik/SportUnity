import { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

export default function useKeyboardOpened() {
	const [opened, setOpened] = useState(false)
	useEffect(() => {
		Keyboard.addListener('keyboardWillShow', () => {
			setOpened(true)
		})
		Keyboard.addListener('keyboardDidShow', () => {
			setOpened(true)
		})
		Keyboard.addListener('keyboardWillHide', () => {
			setOpened(false)
		})
		Keyboard.addListener('keyboardDidHide', () => {
			setOpened(false)
		})
		return () => Keyboard.removeAllListeners()
	}, [setOpened])

	return opened
}
