const UserGroupCreate = () => import('../../../pages/userGroups/Create.vue');

export default {
    name: 'administration.userGroups.create',
    path: 'create',
    component: UserGroupCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create User Group',
    },
};
