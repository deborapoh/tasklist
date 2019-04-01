export const routes = async (taskId=null) => await Promise.all([
  {
    name: 'TASKLIST',
    path: '/',
    loader: await import('../pages/TaskList'),
  },
  {
    name: 'ADDTASK',
    path: '/add_task',
    loader: await import('../pages/EditTask'),
  },
  {
    name: 'EDITTASK',
    path: `/:taskId/edit_task`,
    loader: await import('../pages/EditTask'),
  },
  {
    name: 'ABOUT',
    path: '/about',
    loader: await import('../pages/About'),
  },
]);
