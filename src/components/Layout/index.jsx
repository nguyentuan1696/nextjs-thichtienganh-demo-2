import clsx from 'clsx'
import styles from './styles.module.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation'

const Layout = ({ children, wrapperClassName }) => {
	useKeyboardNavigation()
	return (
		<>
			<AnnouncementBar />
			<Navbar />
			<div className={clsx(styles['main-wrapper'], wrapperClassName)}>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout
