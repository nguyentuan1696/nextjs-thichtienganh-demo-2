import { useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import IconClose from '@/components/Icons/IconClose'

const content = 'cho nay de thong bao, co the chen html, cai ma mi gi cung dc'

const AnnouncementBar = () => {
	const [isCloseable, setIsCloseable] = useState(true)
	const close = () => { setIsCloseable(false) }
	return (
		<>
			{isCloseable ? (
				<div className={styles.announcementBar} role="banner">
					<div
						className={styles.announcementBarContent}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<button
						aria-label="Close Announcementbar"
						className={clsx('clean-btn', 'close', styles.announcementBarClose)}
						onClickCapture={close}>
						<IconClose width={14} height={14} strokeWidth={3.1} />
					</button>
				</div>
			) : null}
		</>
	)
}

export default AnnouncementBar
