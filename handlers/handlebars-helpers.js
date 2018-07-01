const moment = require('moment');

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
  }
};
