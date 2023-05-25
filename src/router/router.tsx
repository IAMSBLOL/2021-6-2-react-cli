
import * as React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  APP_HOME, APP_TEST
} from './pathNames'

function SuspenseFn (Comp:any) {
  return (
    <React.Suspense>
      <Comp />
    </React.Suspense>
  )
}

const App = React.lazy(() => import('@src/views/container/app'));
const Test = React.lazy(() => import('@src/views/test'));
const Home = React.lazy(() => import('@src/views/home'));
// const HomeN = React.lazy(() => import('@src/views/home/one'));
// const HomeT = React.lazy(() => import('@src/views/home/two'));

const routes = [
  {
    path: '/',
    element: <Navigate to={APP_HOME} replace />
  },
  {
    // path: '/app',
    // exact: true,
    strict: true,
    element: SuspenseFn(App),
    children: [
      {
        path: APP_TEST,
        element: SuspenseFn(Test),

      },
      {
        path: APP_HOME,
        element: SuspenseFn(Home),
        children: [
          // {
          //   path: APP_HOME_ONE,
          //   element: SuspenseFn(HomeN),
          // },
          // {
          //   path: APP_HOME_TWO,
          //   element: SuspenseFn(HomeT),
          // },
        ]
      },
    ]
  }
]
const Routes = createBrowserRouter(routes);
// If you need to navigate externally, instead of history.push you can do:
// router.navigate('/path');

// // And instead of history.replace you can do:
// router.navigate('/path', { replace: true });

// // And instead of history.listen you can:
// router.subscribe((state) => console.log('new state', state));
export default Routes;
