class Pager {
    constructor(pageSize = 10, currentPage = 1, pages, totalRecords) {
        this.pageSize = pageSize;
        this.pageIndex = currentPage;
        this.pages = pages;
        this.totalRecords = totalRecords;
    }
    getPagerUrlParameters() {
        return `page=${this.pageIndex}&count=${this.pageSize}`;
    }
    getTotalText() {
        let start = this.getStartPage();
        let end = (start - 1) + this.pageSize;
        if (end > this.totalRecords) {
            end = this.totalRecords;
        }
        return `${start}-${end}&nbsp;/&nbsp;${this.totalRecords}`;
    }
    getStartPage() {
        return (this.pageSize * (this.pageIndex - 1)) + 1;
    }
}

class DataPager {
    constructor(data, pageSize = 10, currentPage = 1) {
        const pages =  Math.ceil(data.length / pageSize);
        this.data = data;
        this.pager = new Pager(pageSize, currentPage, pages);
    }
    getPageData() {
        const start = this.pager.getStartIndex();
        const end = start + this.pager.pageSize;
        return this.data.slice(start, end);
    }
    getStartIndex() {
        const adjustedPageIndex = this.pager.pageIndex - 1;
        return adjustedPageIndex + (this.pager.pageSize - 1) * adjustedPageIndex;
    }
}

exports.DataPager = DataPager;
exports.Pager = Pager;
exports.PAGE_SIZE = 10;