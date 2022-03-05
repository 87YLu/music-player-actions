/**
 * 检查是否英文开头
 * @param {string} str 标题
 */
export default (str: string) => /[a-zA-Z]/.test(str[0])
