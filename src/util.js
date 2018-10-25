/**
 * 获取一个列表中的随机索引
 *
 * @param {Array} list 数组
 * @returns {Number}
 */
function getRandomIndex(list = []) {
    return parseInt(Math.random() * list.length + '');
}

/**
 * 获取列表中的随机一个
 *
 * @param {Array} list 数组
 * @returns {*}
 */
function getOneOf(list = []) {
    return list[getRandomIndex(list)];
}

module.exports = {
    getRandomIndex: getRandomIndex,
    getOneOf: getOneOf
};