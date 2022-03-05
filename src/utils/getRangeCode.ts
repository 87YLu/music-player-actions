/**
 * 获取随机字符串
 * @param {number} len 结果位数，默认 6
 */
export default (len = 6) => {
  const orgStr = 'abcdefghijklmnopqrstuvwxyz'
  let returnStr = ''
  for (let i = 0; i < len; i += 1) {
    returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length))
  }
  return returnStr
}
