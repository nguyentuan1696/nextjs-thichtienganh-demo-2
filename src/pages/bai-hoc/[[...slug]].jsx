import { allDocs } from '.contentlayer/data'
import DocPage from '@/components/DocPage'

export default function Docs({ doc }) {
	return <DocPage doc={doc}></DocPage>
}

export const getStaticProps = ({ params: { slug = [] } }) => {
	const pagePath = `bai-hoc/${slug.join('/')}`
	const doc = allDocs.find((doc) => doc.slug === pagePath)

	return { props: { doc } }
}

export async function getStaticPaths() {
	return {
		paths: allDocs.map((_) => `/${_.slug}`),
		fallback: false,
	}
}
