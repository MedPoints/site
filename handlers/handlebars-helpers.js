exports.hbsHelpers = {
  activeLink: (url, path) => url.startsWith(path) ? 'active' : ''
};