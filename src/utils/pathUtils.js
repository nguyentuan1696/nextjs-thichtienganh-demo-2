// Compare the 2 paths, ignoring trailing /
export const isSamePath = (
	path1,
	path2,
) => {
	const normalize = (pathname) =>
		!pathname || pathname?.endsWith('/') ? pathname : `${pathname}/`
	return normalize(path1) === normalize(path2)
}
