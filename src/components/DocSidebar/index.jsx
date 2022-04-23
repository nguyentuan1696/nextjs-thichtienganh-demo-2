import {memo, useState} from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import Logo from '@/components/Logo'
import IconArrow from '@/components/Icons/IconArrow'
import styles from './styles.module.css'
import clsx from 'clsx'
import {useScrollPosition} from '@/utils/scrollUtils'

function useShowAnnouncementBar() {
	const isActive = true
	const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive)

	useScrollPosition(
		({ scrollY }) => {
			if (isActive) {
				setShowAnnouncementBar(scrollY === 0)
			}
		},
		[isActive],
	)
	return isActive && showAnnouncementBar
}

const HideableSidebarButton = ({ onClick }) => {
	return (
		<button
			type="button"
			title="Collapse sidebar"
			aria-label="Collapse sidebar"
			className={clsx(
				'button button--secondary button--outline',
				styles.collapseSidebarButton,
			)}
			onClick={onClick}>
			<IconArrow className={styles.collapseSidebarButtonIcon} />
		</button>
	)
}

const DocSidebarDesktop = ({ onCollapse,isHidden }) => {
	const showAnnouncementBar = useShowAnnouncementBar()
	const hideOnScroll = true
	const hideableSidebar = true

	return (
		<div
			className={clsx(styles.sidebar, {
				[styles.sidebarWithHideableNavbar]: hideOnScroll,
				[styles.sidebarHidden]: isHidden,
			})}>
			{hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
			<nav
				className={clsx('menu thin-scrollbar', styles.menu, {
					[styles.menuWithAnnouncementBar]: showAnnouncementBar,
				})}>
				<ul className={clsx('menu__list')}>tuan</ul>
			</nav>
			{hideableSidebar && <HideableSidebarButton onClick={onCollapse} />}
		</div>
	)
}

const DocSidebarMobile = () =>
{
	return (
		<p>DocSidebarMobile</p>
	)
}

const DocSidebarDesktopMemo = memo(DocSidebarDesktop)
const DocSidebarMobileMemo = memo(DocSidebarMobile)


const DocSidebar = (props) => {
	  const windowSize = useWindowSize()

		// Desktop sidebar visible on hydration: need SSR rendering
		const shouldRenderSidebarDesktop =
			windowSize === 'desktop' || windowSize === 'ssr'

		// Mobile sidebar not visible on hydration: can avoid SSR rendering
		const shouldRenderSidebarMobile = windowSize === 'mobile'

		return (
			<>
				{shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />}
				{shouldRenderSidebarMobile && <DocSidebarMobileMemo />}
			</>
		)
}

export default DocSidebar
