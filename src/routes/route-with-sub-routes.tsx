import {Suspense, FC} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {IRoute} from './config'

const RouteWithSubRoutes: FC<IRoute> = (route: IRoute) => {
	const user = true

	return (
		<Suspense fallback={route.fallback}>
			<Route
				path={route.path}
				render={props =>
					route.redirect ? (
						<Redirect to={route.redirect} />
					) : route.private ? (
						user ? (
							route.component && (
								<route.component {...props} routes={route.routes} />
							)
						) : (
							<Redirect to="/login" />
						)
					) : (
						route.component && (
							<route.component {...props} routes={route.routes} />
						)
					)
				}
			/>
		</Suspense>
	)
}

export default RouteWithSubRoutes
