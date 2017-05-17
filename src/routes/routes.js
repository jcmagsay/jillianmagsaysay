import Home from 'pages/home/home';
import NotFound from 'pages/not-found/not-found';
import Projects from 'pages/projects/projects';
import Resume from 'pages/resume/resume';

const navRoutes = [
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
    'path': '/resume',
    'name': 'Resume',
    'component': Resume
  }
];

const otherRoutes = [
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound
  }
];

const routes = {
  'navRoutes': navRoutes,
  'all': navRoutes.concat(otherRoutes)
};

export default routes;
