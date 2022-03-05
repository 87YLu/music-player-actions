import pinyin from 'pinyin'

/**
 * 获取中文对应拼音的第一位
 * @param {string} str 中文字符串
 */
export default (str: string) =>
  pinyin(str, {
    heteronym: false,
    segment: false,
    style: pinyin.STYLE_NORMAL,
  })[0][0][0]
