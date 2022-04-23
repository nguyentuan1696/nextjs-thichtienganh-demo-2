import Link from 'next/link'
import ThemedImage from '@/components/ThemedImage'
import useBaseUrl from '@/hooks/useBaseUrl'
const Logo = (props) => {
	const { className, imageClassName, titleClassName, ...propsRest } = props

	const logoLink = useBaseUrl('/')
	const sourceImg = useBaseUrl('img/logo.svg')

	const themedImage = (
		<ThemedImage src={sourceImg} height="32" width="32" alt="" />
	)
	return (
		<Link href={logoLink}>
			<a className={className}>
				<div className={imageClassName}>{themedImage}</div>
				<b className={titleClassName}>Thích Tiếng Anh</b>
			</a>
		</Link>
	)
}

export default Logo
