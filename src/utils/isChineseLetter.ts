/**
 * 查看是否有以 str 开头的中文
 * @param {string} str 字母
 */
export default (str: string) => {
  return 'abcdefghjklmnopqrstwxyz'.includes(str)
}
