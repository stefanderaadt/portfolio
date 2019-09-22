import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-me',
        name: 'About me',
        component: AboutMe
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
];

export default routes;
