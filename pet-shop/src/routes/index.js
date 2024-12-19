import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Food from '~/pages/Food';
import Toy from '~/pages/Toy';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import Feedback from '~/pages/Feedback';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: null },
  { path: '/signup', component: Signup, layout: null },
  { path: '/food', component: Food },
  { path: '/toy', component: Toy },
  { path: '/news', component: News },
  { path: '/contact', component: Contact },
  { path: '/feedback', component: Feedback },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
