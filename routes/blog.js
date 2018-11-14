const router = require('express').Router();
const blog = require('../controllers/blog');
const catchErrors = require('../handlers/errorHandlers').catchErrors;

router.get('/', catchErrors(blog.getBlogPosts));
router.get('/text/:id', catchErrors(blog.getBlogPost));


module.exports = router;