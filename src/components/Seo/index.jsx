import Head from 'next/head'
// import { useTitleFormatter } from '@/utils/generalUtils'
import Schema from '@/components/Schema'
const Seo = ({
	id,
	title,
	description,
	keywords,
	sidebar_label,
	last_edited_time,
	created_time,
	slug,
}) => {
	const baseUrl = 'https://thichtienganh.com/'
	const pageTitle = title
	return (
		<div>
			<Head>
				{title && <title>{pageTitle}</title>}
				{title && <meta property="og:title" content={pageTitle} />}
				{description && <meta name="description" content={description} />}
				{description && (
					<meta property="og:description" content={description} />
				)}
				{keywords && <meta name="keywords" content={keywords} />}
				{/* {image && <meta property="og:image" content={image} />}
				{image && <meta name="twitter:image" content={pageImage} />} */}
				{slug && <link rel="canonical" href={`${baseUrl}${slug}/`} />}
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="vi_VN" />
				<meta name="author" content="Thích Tiếng Anh" />
				<meta name="copyright" content="Thích Tiếng Anh " />
				<meta name="robots" content="index, follow"></meta>
				<Schema title={title} description={description} keywords={keywords} last_edited_time={last_edited_time} created_time={created_time} slug={slug} />
			</Head>
		</div>
	)
}

export default Seo
