import pagesRoutes from "../routes/pages.js"

const constructorMethod = (app) => {
    app.use('/', pagesRoutes);
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
      });
};

export default constructorMethod;