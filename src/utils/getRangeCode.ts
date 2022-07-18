/**
 * 获取随机字符串
 * @param {number} len 结果位数，默认 6
 * @param {number} chinese 是否只需要中文开头的英文，默认为 false
 */
export default (len = 6, chinese = false) => {
  const orgStr = chinese ? 'abcdefghjklmnopqrstwxyz' : 'abcdefghijklmnopqrstuvwxyz'

  let returnStr = ''
  for (let i = 0; i < len; i += 1) {
    returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length))
  }
  return returnStr
}
