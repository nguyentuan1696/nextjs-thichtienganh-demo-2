import clsx from 'clsx'
import NavbarNavLink from './NavbarNavLink'

const DefaultNavbarItemDesktop = ({ to, label, className, ...props }) => {
	const element = <NavbarNavLink to={to} label={label} {...props} />

	return element
}

const DefaultNavbarItemMobile = ({ className, ...props }) => {
	return (
		<li className="menu__list-item" onClick={props.onClick}>
			<NavbarNavLink
				mobile
				className='menu__link'
				{...props}
			/>
		</li>
	)
}

const DefaultNavbarItem = ({ mobile = false, ...props }) => {
	const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop
	return <Comp {...props} />
}

export default DefaultNavbarItem
