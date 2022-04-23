import clsx from 'clsx'
import styles from './styles.module.css'
import TOC from '@/components/TOC'
import DocItemFooter from '@/components/DocItemFooter'
import useWindowSize from '@/hooks/useWindowSize'
import DocPaginator from '@/components/DocPaginator'

const DocItem = (props) =>
{
	const windowSize = useWindowSize()
	const renderTocDesktop = (windowSize === 'desktop' || windowSize === 'ssr')

	return (
		<>
			<div className={clsx('row')}>
				<div className={clsx('col', styles.docItemCol)}>
					<div className={clsx(styles.docItemContainer)}>
						<article>
							<div className={clsx('markdown')}>{props.children}</div>
							<DocItemFooter />
						</article>
						<DocPaginator />
					</div>
				</div>
				{renderTocDesktop && (
					<div className="col col--3">
						<TOC />
					</div>
				)}
			</div>
		</>
	)
}

export default DocItem
