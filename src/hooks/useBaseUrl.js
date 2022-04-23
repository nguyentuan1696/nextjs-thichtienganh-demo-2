import { hasProtocol } from '@/utils/isInternalUrl'

const addBaseUrl = (
	siteUrl,
	baseUrl,
	url,
	{ forcePrependBaseUrl = false, absolute = false } = {},
) => {
	if (!url) {
		return url
	}

	// it never makes sense to add a base url to a local anchor url
	if (url.startsWith('#')) {
		return url
	}

	// it never makes sense to add a base url to an url with a protocol
	if (hasProtocol(url)) {
		return url
	}

	if (forcePrependBaseUrl) {
		return baseUrl + url.replace(/^\//, '')
	}

	// We should avoid adding the baseurl twice if it's already there
	const shouldAddBaseUrl = !url.startsWith(baseUrl)

	const basePath = shouldAddBaseUrl ? baseUrl + url.replace(/^\//, '') : url

	return absolute ? siteUrl + basePath : basePath
}

const useBaseUrlUtils = () =>
{
	const siteUrl = 'https://thichtienganh.com'
	const baseUrl = '/'

	return {
		withBaseUrl: (url, options) => addBaseUrl(siteUrl, baseUrl, url, options),
	}
}

const useBaseUrl = (url, options) => {
	const { withBaseUrl } = useBaseUrlUtils()
	return withBaseUrl(url, options)
 }

export default useBaseUrl
