const getBlogPosts = (localization) => {
    return localization.localize('blogs').reverse();
};

const getBlogPost = (id, localization) => {
    return localization.localize('blogs').find((item) => item.id === id);
}; 

exports.getBlogPosts = getBlogPosts;
exports.getBlogPost = getBlogPost;