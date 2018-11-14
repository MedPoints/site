const config = require('config');
const axios = require('axios');
const { DataPager } = require('./../helpers/pager');
const { getBlogPosts, getBlogPost } = require('./../helpers/blog');
const localization = require('../helpers/localization').localization;

const PAGE_TITLE = localization.localize('pageTitles.blog');

exports.getBlogPosts = async (req, res) => {
    const {
        page,
        count
    } = req.query;

    const blogArticles = getBlogPosts();

    const dataPager = new DataPager(blogArticles, count, page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/blog',
        parameters: req.query
      };

    res.render('pages/blog', { 
        blogArticles: dataPager.getPageData(),
        pagerInfo,
        PAGE_TITLE, 
        title: PAGE_TITLE
    });
};

exports.getBlogPost = async (req, res) => {
    const id = req.params.id;
    const blogArticle = getBlogPost(+id);


    res.render('pages/text', { 
        blogArticle,
        PAGE_TITLE, 
        title: PAGE_TITLE
    });
};