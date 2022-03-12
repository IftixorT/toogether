import {ReactNode, LazyExoticComponent, ComponentType, lazy} from 'react'

export interface IRoute {
	// Path, like in basic prop
	path: string
	// Exact, like in basic prop
	exact: boolean
	// Preloader for lazy loading
	fallback: NonNullable<ReactNode> | null
	// Lazy Loaded component
	component?: LazyExoticComponent<ComponentType<any>>
	// Sub routes
	routes?: IRoute[]
	// Redirect path
	redirect?: string
	// If router is private, this is going to be true
	private?: boolean
}

export const routes: IRoute[] = [
	{
		path: '/',
		component: lazy(() => import('../pages/landing/landing')),
		exact: true,
		private: false,
		fallback: <div> Loading... </div>,
	},
	{
		path: '/partnership',
		component: lazy(() => import('../pages/partnership/partnership')),
		exact: true,
		private: false,
		fallback: <div> Loading... </div>,
	},
	{
		path: '/menu',
		component: lazy(() => import('../pages/foods/foods')),
		exact: true,
		private: false,
		fallback: <div> Loading... </div>,
	},
	{
		path: '',
		exact: false,
		redirect: '/',
		fallback: <div>Loading ...</div>,
	},
]
