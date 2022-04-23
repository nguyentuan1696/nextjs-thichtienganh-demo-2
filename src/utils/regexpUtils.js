/**
 * Converts an optional string into a Regex case insensitive and global
 */
export function isRegexpStringMatch(
	regexAsString,
	valueToTest,
) {
	if (
		typeof regexAsString === 'undefined' ||
		typeof valueToTest === 'undefined'
	) {
		return false
	}

	return new RegExp(regexAsString, 'gi').test(valueToTest)
}
