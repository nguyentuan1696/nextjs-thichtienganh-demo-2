const Schema = ({
	title,
	description,
	keywords,
	last_edited_time,
	created_time,
	slug,
}) => {
	const jslonld = `{"@context":"https://schema.org","@type":"Article","mainEntityOfPage":{"@type":"WebPage","@id":"https://thichtienganh.com/${slug}"},"headline":"${title}","image":["https://example.com/photos/1x1/photo.jpg","https://example.com/photos/4x3/photo.jpg","https://example.com/photos/16x9/photo.jpg"],"keywords":"${keywords}","datePublished":"${created_time}","dateModified":"${last_edited_time}","author":{"@type":"Organization","name":"ThíchTiếngAnh","url":"https://thichtienganh.com"},"publisher":{"@type":"Organization","name":"ThíchTiếngAnh","logo":{"@type":"ImageObject","url":"https://google.com/logo.jpg"}}}`

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: jslonld }}
			key="jsonld-article"
		/>
	)
}

export default Schema
