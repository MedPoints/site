class Pager {
    constructor(pageSize = 3, currentPage = 1, pages) {
        this.pageSize = pageSize;
        this.pageIndex = currentPage;
        this.pages = pages;
    }
    getPagerUrlParameters() {
        return `page=${this.pageIndex}&count=${this.pageSize}`;
    }
}

exports.Pager = Pager;
exports.PAGE_SIZE = 5;