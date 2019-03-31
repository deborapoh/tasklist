export const routesDev = async () => await Promise.all([
  {
    name: 'HOME A',
    path: '/',
    loader: await import('../pages/Home'),
  },
  {
    name: 'PAGE A',
    path: '/pagea',
    loader: await import('../pages/PageA'),
  },
]);
