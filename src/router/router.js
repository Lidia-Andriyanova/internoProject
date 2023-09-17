import InternoMain from '../pages/InternoMain.vue';
import BlogPage from '../pages/BlogPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';


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
];

export default routes;