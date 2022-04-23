import {memo} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import useBaseUrl from '@/hooks/useBaseUrl'
import IconExternalLink from '@/components/Icons/IconExternalLink'
import isInternalUrl from '@/utils/isInternalUrl'
import ThemedImage from '@/components/ThemedImage'

const FooterLink = ({ to, label, ...props }) => {
	const toUrl = useBaseUrl(to)
	const isInternalLink = isInternalUrl(toUrl)

	return (
		<>
			{isInternalLink ? (
				<Link href={toUrl}>
					<a className="footer__link-item">{label}</a>
				</Link>
			) : (
				<a className="footer__link-item" href={toUrl}>
					<span>
						{label}
						<IconExternalLink />
					</span>
				</a>
			)}
		</>
	)
}

const FooterLogo = ({ source, alt, width, height }) =>
{
	return (
		<ThemedImage
			className="footer__logo"
			alt={alt}
			sources={sources}
			width={width}
			height={height}
		/>
	)
}

const Footer = () => {
	return (
		<footer className="footer">
			<div className={clsx('container', 'container--fluid')}>
				<div className={clsx('row', 'footer__links')}>
					<div className={clsx('col', 'footer__col')}>
						<h4 className="footer__title">Docs</h4>
						<ul className="footer__items">
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									Getting Started
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									API
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div className={clsx('col', 'footer__col')}>
						<h4 className="footer__title">Docs</h4>
						<ul className="footer__items">
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									Getting Started
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									API
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div className={clsx('col', 'footer__col')}>
						<h4 className="footer__title">Docs</h4>
						<ul className="footer__items">
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									Getting Started
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									API
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div className={clsx('col', 'footer__col')}>
						<h4 className="footer__title">Docs</h4>
						<ul className="footer__items">
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									Getting Started
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									API
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link-item" href="#url">
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)
