/**
 * 检查是否为空
 * @param {any} str 标题
 */
export default (str: any) => {
  return str == null || str?.trim()?.length === 0
}
