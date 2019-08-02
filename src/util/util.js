import exportFile from "./exportFile";
import RegExpMap  from "./RegExpMap";


/**
 * NOTE
 * 移除对象中，值为空的键
 */
const removeObjectBlankKey = (obj) => {
  const param = {};
  if (!obj) return param;
  for ( let key in obj ) {
    if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
      param[key] = removeObjectBlankKey(obj[key]);
    } else if (obj[key] !== undefined && obj[key] !== null) {
      param[key] = obj[key];
    }
  }
  return param;
}

/**
 * NOTE
 * 移除数组中的空值
 * @param array
 */
const removeArrayBlankChildren = (arrayList, childrenKey) => {
  const array = [...arrayList];
  for ( let i = 0; i < array.length; i++ ) {
    if (array[i][childrenKey] && array[i][childrenKey].length) {
      removeArrayBlankChildren(array[i][childrenKey], childrenKey);
    } else {
      delete array[i][childrenKey];
    }
  }
  return array;
};

/**
 * NOTE
 * 遍历多层数组查询指定值的数据
 */
const arrayTraverseQuery = (array, keyValue, key = 'id') => {
  let item;

  function traverse (list, id) {
    list = list || [];
    for ( let i = 0; i < list.length; i++ ) {
      if (list[i][key] === id) {
        item = list[i];
        return
      } else {
        traverse(list[i].children, id);
      }
    }
  }

  traverse(array, keyValue);
  return item;
};


export default {
  exportFile,
  RegExpMap,
  removeObjectBlankKey,
  removeArrayBlankChildren,
  arrayTraverseQuery,
};
