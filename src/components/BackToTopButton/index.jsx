import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import {useLocationChange} from '@/hooks/useLocationChange'
import {useScrollPosition} from '@/utils/scrollUtils'

const threshold = 300

const SupportsNativeSmoothScrolling = false

function smoothScrollTopNative(){
	window.scrollTo({ top: 0, behavior: 'smooth' })
	return () => {
		// Nothing to cancel, it's natively cancelled if user tries to scroll down
	}
}

function smoothScrollTopPolyfill() {
	let raf = null
	function rafRecursion() {
		const currentScroll = document.documentElement.scrollTop
		if (currentScroll > 0) {
			raf = requestAnimationFrame(rafRecursion)
			window.scrollTo(0, Math.floor(currentScroll * 0.85))
		}
	}
	rafRecursion()

	// Break the recursion
	// Prevents the user from "fighting" against that recursion producing a weird UX
	return () => raf && cancelAnimationFrame(raf)
}


function useSmoothScrollToTop() {
	const lastCancelRef = useRef(null)
	function smoothScrollTop() {
		lastCancelRef.current = SupportsNativeSmoothScrolling
			? smoothScrollTopNative()
			: smoothScrollTopPolyfill()
	}

	return {
		smoothScrollTop,
		cancelScrollToTop: () => lastCancelRef.current?.(),
	}
}

function BackToTopButton(){
	const [show, setShow] = useState(false)
	const isFocusedAnchor = useRef(false)
	const { smoothScrollTop, cancelScrollToTop } = useSmoothScrollToTop()

	useScrollPosition(({ scrollY: scrollTop }, lastPosition) => {
		const lastScrollTop = lastPosition?.scrollY

		// No lastScrollTop means component is just being mounted.
		// Not really a scroll event from the user, so we ignore it
		if (!lastScrollTop) {
			return
		}

		if (isFocusedAnchor.current) {
			isFocusedAnchor.current = false
			return
		}

		const isScrollingUp = scrollTop < lastScrollTop

		if (!isScrollingUp) {
			cancelScrollToTop()
		}

		if (scrollTop < threshold) {
			setShow(false)
			return
		}

		if (isScrollingUp) {
			const documentHeight = document.documentElement.scrollHeight
			const windowHeight = window.innerHeight
			if (scrollTop + windowHeight < documentHeight) {
				setShow(true)
			}
		} else {
			setShow(false)
		}
	})

	useLocationChange((locationChangeEvent) => {
		if (locationChangeEvent.location.hash) {
			isFocusedAnchor.current = true
			setShow(false)
		}
	})

	return (
		<button
			className={clsx(
				'clean-btn',
				styles.backToTopButton,
				{
					[styles.backToTopButtonShow]: show,
				},
			)}
			aria-label='Scroll back to top '
			type="button"
			onClick={() => smoothScrollTop()}
		/>

	)
}

export default BackToTopButton
