const moment = require('moment');
const Handlebars = require('handlebars');

exports.hbsHelpers = {
  activeLink: (url, path) => url.startsWith(path) ? 'active' : '',
  times: (n, block) => {
    let accum = '';
    for (let i = 0; i < n; i++) {
      accum += block.fn(i);
    }
    return accum;
  },
  dateFormat: (date) => {
    return moment(new Date(date)).format('D MMMM YYYY');
  },
  composeRate: (doctor) => {
    if (doctor.ratings.length === 0) {
      return {knowledge: 0, skills: 0, attention: 0, priceQuality: 0};
    }
    const rate = doctor.ratings.reduce((result, rate) => {
      const {knowledge, skills, attention, priceQuality} = rate.commonRate;
      result.knowledge += knowledge;
      result.skills += skills;
      result.attention += attention;
      result.priceQuality += priceQuality;
    }, {knowledge: 0, skills: 0, attention: 0, priceQuality: 0});
    rate.knowledge /= doctor.ratings.length;
    rate.skills /= doctor.ratings.length;
    rate.attention /= doctor.ratings.length;
    rate.priceQuality /= doctor.ratings.length;
    return rate;
  },
  getProgressBarColor: (skill) => {
    if(skill >= 7) {
      return 'bg-success';
    } else if (skill >= 5) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  },
  getProgressBarWidth: (skill) => {
    return skill * 10;
  },
  persistGetParameters: (pagerInfo, pagerData, pageType) => {
    let page = 0;
    switch (pageType) {
      case 'previous':
        page = pagerData.previousPage;
        break;
      case 'next':
        page = pagerData.nextPage;
        break;
      case 'nth':
        page = pagerData.page;
        break;
    }

    const baseUrl = pagerInfo.baseUrl;
    const searchQuery = pagerInfo.searchQuery;

    if (searchQuery)
      return `${baseUrl}?page=${page}&${pagerInfo.searchParameterName}=${searchQuery}`;
    return `${baseUrl}?page=${page}`;
  },
  pagination: (currentPage, totalPage, size, options) => {
    var startPage, endPage, context;
  
    if (arguments.length === 3) {
      options = size;
      size = 5;
    }
  
    startPage = currentPage - Math.floor(size / 2);
    endPage = currentPage + Math.floor(size / 2);
  
    if (startPage <= 0) {
      endPage -= (startPage - 1);
      startPage = 1;
    }
  
    if (endPage > totalPage) {
      endPage = totalPage;
      if (endPage - size + 1 > 0) {
        startPage = endPage - size + 1;
      } else {
        startPage = 1;
      }
    }
  
    context = {
      startFromFirstPage: false,
      pages: [],
      size: size,
      endAtLastPage: false,
      nextPage: currentPage + 1,
      previousPage: currentPage - 1,
    };
    if (currentPage === 1) {
      context.startFromFirstPage = true;
    }
    for (var i = startPage; i <= endPage; i++) {
      context.pages.push({
        page: i,
        isCurrent: i === currentPage,
      });
    }
    if (currentPage === totalPage || totalPage === 0) {
      context.endAtLastPage = true;
    }
  
    return options.fn(context);
  }
};
