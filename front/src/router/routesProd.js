export const routesProd = async () => await Promise.all([
  {
    name: 'PAGE B',
    path: '/pageb',
    loader: await import('../pages/PageB'),
  },
  {
    name: 'PAGE C',
    path: '/pagec',
    loader: await import('../pages/PageC'),
  },
]);
