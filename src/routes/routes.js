import About from 'pages/about/about';
import Home from 'pages/home/home';
import Ideas from 'pages/ideas/ideas';
import NotFound from 'pages/not-found/not-found';
import Projects from 'pages/projects/projects';
import Resume from 'pages/resume/resume';
import Contact from 'pages/contact/contact';
import Cms from 'pages/cms/cms';

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
    'path': '/ideas',
    'name': 'Ideas',
    'component': Ideas
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
    'path': '/cms',
    'name': 'CMS',
    'component': Cms
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
