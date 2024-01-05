import { Router } from 'express';
const router = Router();
// import 

router.route('/')
    .get(function (req, res) {
        res.render('home', { pageTitle: 'lili\'s cafe' });
    });

router.route('/my-interests')
    .get(function (req, res) {
        res.render('my-interests', { pageTitle: 'My Interests' });
    })

router.route('/skills-and-experience')
    .get(function (req, res) {
        res.render('skills-and-experience', { pageTitle: 'Skills and Experience' });
    })

export default router;