class Pager {
    constructor(pageSize = 3, currentPage = 1, pages) {
        this.pageSize = pageSize;
        this.pageIndex = currentPage;
        this.pages = pages;
    }

    getPagerUrlParameters() {
        return `page=${this.pageIndex}&count=${this.pageSize}`;
    }
    getPageIndices() {
        return Array.apply(null, {length: this.pages}).map(Number.call, Number);
    }
}

exports.Pager = Pager;
exports.PAGE_SIZE = 5;