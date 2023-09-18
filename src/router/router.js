import InternoMain from '../pages/InternoMain.vue';
import BlogPage from '../pages/BlogPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue';


const routes = [
    {
        path: '/',
        component: InternoMain,

    },
    {
        path: '/main',
        component: InternoMain,

    },
    {
        path: '/blog',
        component: BlogPage,

    },
    {
        path: '/project',
        component: ProjectPage,

    },   
    {
        path: '/projectdetails',
        component: ProjectDetailsPage,

    },         
];

export default routes;