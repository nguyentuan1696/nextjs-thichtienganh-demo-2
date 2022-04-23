import PaginatorNavLink from '@/components/PaginatorNavLink';

function DocPaginator(props) {
	const { previous, next } = props

	return (
		<nav
			className="pagination-nav docusaurus-mt-lg"
			aria-label="Docs pages navigation">
			<div className="pagination-nav__item">
				{previous && <PaginatorNavLink {...previous} subLabel="Previous" />}
			</div>
			<div className="pagination-nav__item pagination-nav__item--next">
				{next && <PaginatorNavLink {...next} subLabel="Next" />}
			</div>
		</nav>
	)
}

export default DocPaginator
