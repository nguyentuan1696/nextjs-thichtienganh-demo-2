import { useState, useCallback } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '@/components/MDXComponent'
import Layout from '@/components/Layout'
import BackToTopButton from '@/components/BackToTopButton'
import DocSidebar from '@/components/DocSidebar'
import clsx from 'clsx'
import DocItem from '@/components/DocItem'
import styles from './styles.module.css'
import IconArrow from '@/components/Icons/IconArrow'

const DocPageContent = ({ doc }) => {
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false)
	const [hiddenSidebar, setHiddenSidebar] = useState(false)
	const toggleSidebar = useCallback(() => {
		if (hiddenSidebar) {
			setHiddenSidebar(false)
		}

		setHiddenSidebarContainer((value) => !value)
	}, [hiddenSidebar])

	const MDXComponent = useMDXComponent(doc.body.code)
	return (
		<Layout wrapperClassName={styles.docsPages}>
			<div className={styles.docPage}>
				<BackToTopButton />

				<aside
					className={clsx(styles.docSidebarContainer, {
						[styles.docSidebarContainerHidden]: hiddenSidebarContainer,
					})}
					onTransitionEnd={(e) => {
						if (
							!e.currentTarget.classList.contains(styles.docSidebarContainer)
						) {
							return
						}

						if (hiddenSidebarContainer) {
							setHiddenSidebar(true)
						}
					}}>
					<DocSidebar />
					{hiddenSidebar && (
						<div
							className={styles.collapsedDocSidebar}
							title="Expand sidebar"
							aria-label="Expand sidebar"
							tabIndex={0}
							role="button"
							onKeyDown={toggleSidebar}
							onClick={toggleSidebar}>
							<IconArrow className={styles.expandSidebarButtonIcon} />
						</div>
					)}
				</aside>

				<main className={clsx(styles.docMainContainer)}>
					<div
						className={clsx(
							'container padding-top--md padding-bottom--lg',
							styles.docItemWrapper,
							{
								[styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
							},
						)}>
						<DocItem>
							<MDXComponent components={{ ...components }} />
						</DocItem>
					</div>
				</main>
			</div>
		</Layout>
	)
}

const DocPage = ({ doc }) => {
	return (
		<>
			<DocPageContent doc={doc} />
		</>
	)
}

export default DocPage
