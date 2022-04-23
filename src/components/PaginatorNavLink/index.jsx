import Link from 'next/link'

const PaginatorNavLink = (props) =>
{
	const { permalink, title, subLabel } = props
	return (
		<Link href={permalink}>
			<a className="pagination-nav__link">
				{subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
				<div className="pagination-nav__label">{title}</div>
			</a>
		</Link>
	)
}

export default PaginatorNavLink
