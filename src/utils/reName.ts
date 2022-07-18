import fs from 'fs'
import path from 'path'
import getFirstPinyin from './getFirstPinyin'
import getRangeCode from './getRangeCode'
import isStartWithChinese from './isStartWithChinese'
import isStartWithEnglish from './isStartWithEnglish'
import isChineseLetter from './isChineseLetter'
import { originPath } from '../constant'

/**
 * 重命名文件
 * @param item 需要被重命名的文件
 * @param baseName 重命名的内容
 * @return 6 位的前缀码
 */
export default (item: string, baseName: string) => {
  const oldPath = path.join(originPath, item)
  const { ext } = path.parse(item)
  const randomFiveLetter = getRangeCode(5)

  let prefix: string

  if (isStartWithChinese(baseName)) {
    prefix = `${getFirstPinyin(baseName[0])}${randomFiveLetter}`
  } else if (isStartWithEnglish(baseName)) {
    const firstLetter = baseName[0].toLowerCase()
    const targetLetter = isChineseLetter(firstLetter) ? firstLetter : getRangeCode(1, true)
    prefix = `${targetLetter}${randomFiveLetter}`
  } else {
    prefix = `${getRangeCode(1, true)}${randomFiveLetter}`
  }

  const newPath = path.join(originPath, `${prefix} - ${baseName.replace(/[\\/:*?"<>|]+/g, '')}${ext}`)

  fs.renameSync(oldPath, newPath)

  return prefix
}
