import { useState, useCallback, useEffect } from 'react'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import useHideableNavbar from '@/hooks/ useHideableNavbar'
import useWindowSize from '@/hooks/useWindowSize'
import IconClose from '@/components/Icons/IconClose'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import IconMenu from '@/components/Icons/IconMenu'
import SearchBar from '@/components/SearchBar'
import DefaultNavbarItem from '@/components/NavbarItem/DefaultNavbarItem'
import DropdownNavbarItem from '@/components/NavbarItem/DropdownNavbarItem.'

const useMobileSidebar = () => {
	const windowSize = useWindowSize()

	// Mobile sidebar not visible on hydration: can avoid SSR rendering
	const shouldRender = windowSize === 'mobile' // || windowSize === 'ssr';

	const [shown, setShown] = useState(false)

	// Close mobile sidebar on navigation pop
	// Most likely firing when using the Android back button (but not only)
	// useHistoryPopHandler(() => {
	// 	if (shown) {
	// 		setShown(false)
	// 		// Should we prevent the navigation here?
	// 		// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
	// 		return false // prevent pop navigation
	// 	}
	// 	return undefined
	// })

	const toggle = useCallback(() => {
		setShown((s) => !s)
	}, [])

	useEffect(() => {
		if (windowSize === 'desktop') {
			setShown(false)
		}
	}, [windowSize])

	return { shouldRender, toggle, shown }
}

const NavbarMobileSidebar = ({ sidebarShown, toggleSidebar }) => {
	useLockBodyScroll(sidebarShown)

	return (
		<div className="navbar-sidebar">
			<div className="navbar-sidebar__brand">
				<Logo
					className="navbar__brand"
					imageClassName="navbar__logo"
					titleClassName="navbar__title"
				/>
				<button
					type="button"
					className={clsx('clean-btn', 'navbar-sidebar__close')}
					onClick={toggleSidebar}>
					<IconClose color="var(--color-emphasis-600)" />
				</button>
			</div>

			<div className="navbar-sidebar__items">
				<div className={clsx('navbar-sidebar__item', 'menu')}>
					<ul className="menu__list">
						<DefaultNavbarItem
							mobile
							label="nguyenn"
							className=""
							onClick={toggleSidebar}
							to="/bai-hoc/ngu-phap/thi/hien-tai-don"
						/>
						<DefaultNavbarItem
							mobile
							label="external link"
							to="https://www.douyin.com/"
						/>
						<DropdownNavbarItem mobile />
					</ul>
				</div>
			</div>
		</div>
	)
}

const Navbar = () => {
	const hideOnScroll = true
	const mobileSidebar = useMobileSidebar()
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

	return (
		<nav
			ref={navbarRef}
			className={clsx('navbar', 'navbar--fixed-top', {
				'navbar-sidebar--show': mobileSidebar.shown,
				navbarHideable: hideOnScroll,
				navbarHidden: hideOnScroll && !isNavbarVisible,
			})}>
			<div className="navbar__inner">
				<div className="navbar__items">
					<button
						aria-label="Navigation bar toggle"
						type="button"
						className={clsx('navbar__toggle', 'clean-btn')}
						tabIndex={0}
						onClick={mobileSidebar.toggle}
						onKeyDown={mobileSidebar.toggle}>
						<IconMenu />
					</button>
					<Logo
						className="navbar__brand"
						imageClassName="navbar__logo"
						titleClassName="navbar__title"
					/>
					<DefaultNavbarItem
						to="/bai-hoc/ngu-phap/thi/hien-tai-don"
						label="menu-1"
					/>
					<DefaultNavbarItem to="https://vnexpress.net/" label="menu-2" />

					<DropdownNavbarItem to="/ngu-phap" label="menu-3" />
				</div>
				<div className={clsx('navbar__items', 'navbar__items--right')}>
					<SearchBar />
				</div>
			</div>

			{/* Display backdrop background */}
			<div
				role="presentation"
				className="navbar-sidebar__backdrop"
				onClick={mobileSidebar.toggle}
			/>

			{/* Display sidebar */}
			{mobileSidebar.shouldRender && (
				<NavbarMobileSidebar
					sidebarShown={mobileSidebar.shown}
					toggleSidebar={mobileSidebar.toggle}
				/>
			)}
		</nav>
	)
}

export default Navbar
