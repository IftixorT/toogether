import {Switch, BrowserRouter as Router} from 'react-router-dom'
import {routes, IRoute} from './config'
import RouteWithSubRoutes from './route-with-sub-routes'
const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				{routes.map((route: IRoute) => (
					<RouteWithSubRoutes key={route.path || route.redirect} {...route} />
				))}
			</Switch>
		</Router>
	)
}

export default Routes
