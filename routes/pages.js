import { Router } from 'express';
const router = Router();
import path from 'path';

const __dirname = path.resolve();

router.route('/')
    .get(function (req, res) {
        const filePath = path.join(__dirname, 'public/static/index.html');
        res.sendFile(filePath);
    });

export default router;