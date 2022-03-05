/**
 * 检查标题是否符合格式：(6位英文字母) - (...)
 * @param {string} str 标题
 */
export default (str: string) => /^[a-z]{6} -/.test(str)
