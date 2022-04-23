import {useState} from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import useHeadingsData from '@/hooks/useHeadingsData'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

// TODO fix correct position of heading, add active link when scroll

const Headings = ({ headings, activeId }) => (
	<>
		<div
			className={clsx(styles.tableOfContents, 'thin-scrollbar')}
			aria-label="Table of Contents">
			<ul
				className={clsx(
					styles['table-of-contents'],
					styles['table-of-contents__left-border'],
				)}>
				{headings.map((heading) => (
					<li key={heading.id}>
						<a
							href={`#${heading.id}`}
							className={styles['table-of-contents__link']}
							onClick={(e) => {
								e.preventDefault()
								document.querySelector(`#${heading.id}`).scrollIntoView({
									behavior: 'smooth',
								})
							}}>
							{heading.title}
						</a>
						{heading.items.length > 0 && (
							<ul>
								{heading.items.map((child) => (
									<li key={child.id}>
										<a
											className={styles['table-of-contents__link']}
											href={`#${child.id}`}
											onClick={(e) => {
												e.preventDefault()
												document
													.querySelector(`#${heading.id}`)
													.scrollIntoView({
														behavior: 'smooth',
													})
											}}>
											{child.title}
										</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	</>
)

const TOC = () =>
{
	const [activeId, setActiveId] = useState()
	const { nestedHeadings } = useHeadingsData()
	useIntersectionObserver(setActiveId)

	return <Headings headings={nestedHeadings} activeId={activeId} />
}

// const TOC = () =>
// {
// 	return (
// 		<>
// 			<div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
// 				<ul
// 					className={clsx(
// 						styles['table-of-contents'],
// 						styles['table-of-contents__left-border'],
// 					)}>
// 					<li>
// 						<a className={styles['table-of-contents__link']} href="#url">
// 							Installing Infima
// 						</a>
// 					</li>
// 					<li>
// 						<a className={styles['table-of-contents__link']} href="#url">
// 							Verifying Installation
// 						</a>
// 						<ul>
// 							<li>
// 								<a
// 									className={clsx(
// 										styles['table-of-contents__link'],
// 										styles['table-of-contents__link--active'],
// 									)}
// 									href="#url">
// 									Running examples
// 								</a>
// 							</li>
// 							<li>
// 								<a
// 									className={clsx(styles['table-of-contents__link'])}
// 									href="#url">
// 									Troubleshooting
// 								</a>
// 							</li>
// 						</ul>
// 					</li>
// 					<li>
// 						<a className={styles['table-of-contents__link']} href="#url">
// 							Updating Infima
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</>
// 	)
// };

export default TOC
