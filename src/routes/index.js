import Home from './home/Home';
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
