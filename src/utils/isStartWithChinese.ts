/**
 * 检查是否中文开头
 * @param {string} str 标题
 */
export default (str: string) => {
  const res = str.match(/[\u4E00-\u9FA5\uFE30-\uFFA0]{1,}/)

  if (res != null && res.index === 0) {
    return true
  }

  return false
}
