const config = require('config');
const axios = require('axios');
const { DataPager } = require('./../helpers/pager');
const { getBlogPosts, getBlogPost } = require('./../helpers/blog');
const Localization = require('../helpers/localization').Localization;

exports.getBlogPosts = async (req, res) => {
    const {
        page,
        count
    } = req.query;
    const localization = new Localization(req.cookies.locale);
    const PAGE_TITLE = localization.localize('titles.blog');

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
        title: PAGE_TITLE,
        req,
    });
};

exports.getBlogPost = async (req, res) => {
    const slug = req.params.slug;
    const id = slug.split('-')[0];
    const _slug = slug.split('-').splice(1).join('-');
    const blogArticle = getBlogPost(+id);

    if (!_slug || slug !== blogArticle.slug) {
        return res.redirect(`/blog/text/${blogArticle.slug}`);
    }
    
    const localization = new Localization(req.cookies.locale);
    const PAGE_TITLE = localization.localize('titles.blog');

    res.render('pages/text', { 
        blogArticle,
        PAGE_TITLE, 
        title: PAGE_TITLE,
        req,
    });
};