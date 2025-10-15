




const MainRoutes = [
    {
        path: '/',
        component: () => import('../layouts/full/FullLayout.vue'),
        children: [
            {
                path: '',
                name: 'Modern',
                component: () => import('../views/dashboards/Modern.vue'),
            },

            {
                name: 'Notes',
                path: '/apps/notes',
                component: () => import('../views/apps/notes/Notes.vue')
            },
            {
                name: 'Tickets',
                path: '/apps/tickets',
                component: () => import('../views/apps/tickets/Tickets.vue')
            },




            {
                name: 'Blog Posts',
                path: '/apps/blog/post',
                component: () => import('../views/apps/blog/Posts.vue')
            },
            {
                name: 'Blog Details',
                path: '/apps/blog/:slug',
                component: () => import('../views/apps/blog/[id].vue')
            },
            {
                name: 'Icon',
                path: '/icons/solar',
                component: () => import('../views/icons/Solar.vue')
            },






        ],
    },
];



export default MainRoutes;
