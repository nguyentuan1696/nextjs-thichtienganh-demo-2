import Link from 'next/link'
import clsx from 'clsx'
import useBaseUrl from '@/hooks/useBaseUrl'
import isInternalUrl from '@/utils/isInternalUrl'
import IconExternalLink from '@/components/Icons/IconExternalLink'

const NavbarNavLink = ({
	to = "#",
	label,
	mobile = false,
	isDropdownItem = false,
	className,
	...props
}) => {
	const toUrl = useBaseUrl(to)
	const isInternalLink = isInternalUrl(toUrl)
	return (
		<>
			{isInternalLink ? (
				<Link href={toUrl}>
					<a
						className={clsx(
							{ 'navbar__item navbar__link': !mobile },
							{
								dropdown__link: isDropdownItem,
							},
							className,
						)}
						onClick={props.onClick}
						role={props.role}
					>
						{label}
					</a>
				</Link>
			) : (
				<a
					href={toUrl}
					className={clsx(
						{ 'navbar__item navbar__link': !mobile },
						{
							dropdown__link: isDropdownItem,
						},
						className,
					)}
					target="_blank"
					rel="noreferrer">
					<span>
						{label}
						<IconExternalLink />
					</span>
				</a>
			)}
		</>
	)
}

export default NavbarNavLink
