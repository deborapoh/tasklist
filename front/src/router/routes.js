export const routes = async () => await Promise.all([
  {
    name: 'TASKLIST',
    path: '/',
    loader: await import('../pages/TaskList'),
  },
  {
    name: 'EDITTASK',
    path: '/edit_task',
    loader: await import('../pages/EditTask'),
  },
  {
    name: 'ABOUT',
    path: '/about',
    loader: await import('../pages/About'),
  },
]);
