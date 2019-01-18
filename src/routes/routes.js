import About from 'Ecosystems/About/About';
import Home from 'Ecosystems/Home/Home';
import Ideas from 'Ecosystems/Ideas/Ideas';
import NotFound from 'Ecosystems/NotFound/NotFound';
import Projects from 'Ecosystems/Projects/Projects';
import Resume from 'Ecosystems/Resume/Resume';
import Contact from 'Ecosystems/Contact/Contact';
import Cms from 'Ecosystems/Cms/Cms';

const navRoutes = [
  {
    'path': '/about',
    'name': 'About',
    'component': About,
  },
  {
    'path': '/projects',
    'name': 'Projects',
    'component': Projects,
  },
  {
    'path': '/resume',
    'name': 'Resume',
    'component': Resume,
  },
  {
    'path': '/ideas',
    'name': 'Ideas',
    'component': Ideas,
  },
  {
    'path': '/contact',
    'name': 'Contact',
    'component': Contact,
  },
];

const otherRoutes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home,
  },
  {
    'path': '/cms',
    'name': 'CMS',
    'component': Cms,
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound,
  },
];

const routes = {
  'navRoutes': navRoutes,
  'all': navRoutes.concat(otherRoutes),
};

export default routes;
