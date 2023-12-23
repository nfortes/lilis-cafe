import pagesRoutes from "../routes/pages.js"
import contactRoutes from "../routes/contact.js"

const constructorMethod = (app) => {
    app.use('/', pagesRoutes);
    app.use('/contact', contactRoutes);
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
      });
};

export default constructorMethod;