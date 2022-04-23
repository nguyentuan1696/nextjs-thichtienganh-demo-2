import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import NavbarNavLink from '@/components/NavbarItem/NavbarNavLink'
import { useCollapsible, Collapsible } from '@/components/Collapsible'

const DropdownNavbarItemDesktop = ({ items, to, label, ...props }) => {
	const dropdownRef = useRef(null)
	const [showDropdown, setShowDropdown] = useState(false)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
				return
			}
			setShowDropdown(false)
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [dropdownRef])

	return (
		<div
			ref={dropdownRef}
			className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
				'dropdown--show': showDropdown,
			})}>
			<NavbarNavLink to={to} label={label} />
			<ul className="dropdown__menu">
				<li>
					<NavbarNavLink
						to="/bai-hoc/ngu-phap/thi/hien-tai-don"
						label="Thì"
						isDropdownItem
					/>
				</li>
				<li>
					<NavbarNavLink
						to="https://www.douyin.com/"
						label="Cấu trúc câu"
						isDropdownItem
					/>
				</li>
			</ul>
		</div>
	)
}

const DropdownNavbarItemMobile = () => {
	let initialState = false
	const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
		initialState: () => !initialState,
	})

	return (
		<li
			className={clsx('menu__list-item', {
				'menu__list-item--collapsed': collapsed,
			})}>
			<NavbarNavLink
				mobile
				label="tuan"
				role="button"
				className="menu__link menu__link--sublist"
				onClick={(e) => {
					e.preventDefault()
					toggleCollapsed()
				}}
			/>

			<ul className="menu__list">
				<li className="menu__list-item">
					<NavbarNavLink
						to="/bai-hoc/ngu-phap/thi/hien-tai-don"
						label="menu con 2"
						mobile
						className="menu__link"
					/>
				</li>
				<li className="menu__list-item">
					<NavbarNavLink
						to="https://youtu.be/ZFcl69vPKRg?list=RDMMZFcl69vPKRg"
						label="menu con 2"
						mobile
						className="menu__link"
					/>
				</li>
			</ul>
		</li>
	)
}

const DropdownNavbarItem = ({ mobile = false, ...props }) => {
	const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop
	return <Comp {...props} />
}
export default DropdownNavbarItem
