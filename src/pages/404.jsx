import {memo} from 'react'
import Layout from '@/components/Layout'

const NotFound = () =>
{
	return (
		<>
			<Layout>
				<main className="container margin-vert--xl">
					<div className="row">
						<div className="col col--6 col--offset-3">
							<h1 className="hero__title">Page Not Found</h1>
							<p>We could not find what you were looking for.</p>
							<p>
								Please contact the owner of the site that linked you to the
								original URL and let them know their link is broken.
							</p>
						</div>
					</div>
				</main>
			</Layout>
		</>
	)
}

export default memo(NotFound)
