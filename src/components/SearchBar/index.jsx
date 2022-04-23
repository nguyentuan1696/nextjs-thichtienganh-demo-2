import {memo} from 'react'
import useWindowSize from '@/hooks/useWindowSize'

const SearchBarMobile = () => {
	return <p>SearchBarMobile</p>
}

const SearchBarDesktop = (props) => {
	return (
		<form>
			<div className="navbar__search">
				<input className="navbar__search-input" placeholder="Search" />
			</div>
		</form>
	)
}

const SearchbarMobileMemo = memo(SearchBarMobile)
const SearchBarDesktopMemo = memo(SearchBarDesktop)

const SearchBar = () => {
	const windowSize = useWindowSize()

	// Desktop searchbar visible on hydration: need SSR rendering
	const shouldRenderSearchbarDesktop =
		windowSize === 'desktop' || windowSize === 'ssr'

	// Mobile searchba not visible on hydration: can avoid SSR rendering
	const shouldRenderSearchbarMobile = windowSize === 'mobile'

	return (
		<>
			{shouldRenderSearchbarDesktop && <SearchBarDesktopMemo  />}
			{shouldRenderSearchbarMobile && <SearchbarMobileMemo  />}
		</>
	)
}

export default SearchBar
