import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDynamicCallback } from '@/utils/reactUtils'
import { usePrevious } from '@/hooks/usePrevious'

export function useLocationChange(onLocationChange) {
	const location = useRouter()
	const previousLocation = usePrevious(location)

	const onLocationChangeDynamic = useDynamicCallback(onLocationChange)

	useEffect(() => {
		onLocationChangeDynamic({
			location,
			previousLocation,
		})
	}, [onLocationChangeDynamic, location, previousLocation])
}
