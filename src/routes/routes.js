import About from 'pages/about/about';
import Home from 'pages/home/home';
import NotFound from 'pages/not-found/not-found';
import Projects from 'pages/projects/projects';
import Resume from 'pages/resume/resume';
import Contact from 'pages/contact/contact';

const navRoutes = [
  {
    'path': '/about',
    'name': 'About',
    'component': About
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
  },
  {
    'path': '/contact',
    'name': 'Contact',
    'component': Contact
  }
];

const otherRoutes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home
  },
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
