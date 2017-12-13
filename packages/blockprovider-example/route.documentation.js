module.exports = app => {
  // for the example we autodocument the blockprovider
  const routes = app._router.stack.reduce((routes, route) => {
    if (route.route) {
      const { path, methods } = route.route;

      routes.push({
        path,
        methods,
      });
    }

    return routes;
  }, []);

  app.get('/', (req, res) => {
    res.json(routes);
  });
};
