import Home from 'pages/home/home';
import NotFound from 'pages/not-found/not-found';
import Projects from 'pages/projects/projects';

const routes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home
  },
  {
    'path': '/projects',
    'name': 'Projects',
    'component': Projects
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound
  }
];

export default routes;
