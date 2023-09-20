import range from "../../utils/range";

/**
* 修补当前页码（只允许在 1 ~ totalPages 范围内）
* @param {Number} total 总数
* @param {Number} pageSize 每页显示条数
* @param {Number} page 每页页码
*/
const getPage = (total: number, pageSize: number, page: number) => {
  const totalPages = getTotalPages(total, pageSize);

  if (page < 1) {
    page = 1;
  }
  else if (page > totalPages) {
    page = totalPages;
  }

  return page;
};

/**
* 获取总页数
* @param {Number} total 总数
* @param {Number} pageSize 每页显示条数
*/
const getTotalPages = (total: number, pageSize: number) => {
  let totalPages = Math.ceil(total / pageSize);

  if (totalPages < 1) {
    totalPages = 1;
  }

  return totalPages;
};

/**
* 获取页码集合
* @param {Number} total 总数
* @param {Number} pageSize 每页显示条数
*/
const getItems = (page: number, totalPages: number) => {
  let items = [];

  if (totalPages < 9) {
    items = range(1, totalPages + 1);
  }
  else {
    if (page < 6) {
      items = [1, 2, 3, 4, 5, 6, "btnNextFive", totalPages];
    }
    else if (page > totalPages - 5) {
      items = [1, "btnPrevFive", totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    else {
      items = [1, "btnPrevFive", page - 2, page - 1, page, page + 1, page + 2, "btnNextFive", totalPages];
    }
  }

  return items;
};

/**
* 默认导出指定接口
*/
export default {
  getPage,
  getTotalPages,
  getItems
};