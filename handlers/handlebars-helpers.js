const moment = require('moment');
const Handlebars = require('handlebars');
const {queryPersistant} = require('./../helpers/query-persistant');
const localization = require('./../helpers/localization').localization;

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
      case 'first':
        page = 1;
        break;
      case 'last':
        page = pagerInfo.pager.pages;
        break;
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
    return queryPersistant.applyRequestQueryParameters(pagerInfo.parameters, `${pagerInfo.baseUrl}?page=${page}`);
  },
  pagination: (pager, options) => {
    let {pageIndex, pages, pageSize} = pager;
    if (arguments.length === 3) {
      options = pageSize;
      pageSize = 2;
    }

    var current = pageIndex,
        last = pages,
        delta = 3,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
              rangeWithDots.push({
                page: l + 1,
                isCurrent: l + 1 === current,
              });
            } else if (i - l !== 1) {
                rangeWithDots.push({
                  isDots: true,
                });
            }
        }
        rangeWithDots.push({
          page: i,
          isCurrent: i === pageIndex,
        });
        l = i;
    }
    
    let context = {
      pages: rangeWithDots,
      size: pageSize,
      nextPage: pageIndex + 1,
      previousPage: pageIndex - 1,
      startFromFirstPage: pageIndex === 1,
      endAtLastPage: pageIndex === pages || pages === 0,
      totalText: pager.getTotalText()
    };

    return options.fn(context);
  },
  dataColumns: (data, dataOptions, options) => {
    var context = {
      dataGroups: [],
      dataOptions
    };
    if (data) {
      let chunkSize = dataOptions.chunkSize || 16;
      context.dataGroups = [].concat.apply([],
        data.map(function(elem,i) {
              return i%chunkSize ? [] : [data.slice(i,i+chunkSize)];
          })
      );
    }

    return options.fn(context);
  },
  getPropertyValue: (options) => {
    let propertyValue = options.hash.obj[options.hash.propName];
    if (propertyValue === null || propertyValue === undefined)
      propertyValue = '';
    return new Handlebars.SafeString(propertyValue);
  },
  escape: (variable) => {
    return variable.replace(/(['"])/g, '\\$1');
  },
  jsonify: (obj) => {
    return JSON.stringify(obj);
  },
  percentage: (val, full) => {
    return (val * 100) / full;
  },
  getRatingLabel: val => {
    if (val < 4) {
      return 'bad';
    } else if (val >= 4 && val < 7) {
      return 'normal';
    } else {
      return 'good';
    }
  },
  getDateString: (date) => {
    return date.toDateString();
  },
  defaultIfEmpty: (val, defaultVal) => {
    return val || defaultVal;
  },
  localize: (path, locale) => {
    return localization.localize(path, locale);
  },
};
