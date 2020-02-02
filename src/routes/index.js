import Home from './new_home';
import NotFound from './not-found/NotFound';

const routes = [
  {
    path: '/my-profile',
    component: Home,
    exact: true,
  },
  {
    component: NotFound,
  },
];

export default routes;
