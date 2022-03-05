import fs from 'fs'
import path from 'path'
import getFirstPinyin from './getFirstPinyin'
import getRangeCode from './getRangeCode'
import isStartWithChinese from './isStartWithChinese'
import isStartWithEnglish from './isStartWithEnglish'
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

  let prefix: string

  if (isStartWithChinese(baseName)) {
    prefix = `${getFirstPinyin(baseName[0])}${getRangeCode(5)}`
  } else if (isStartWithEnglish(baseName)) {
    prefix = `${baseName[0].toLowerCase()}${getRangeCode(5)}`
  } else {
    prefix = getRangeCode(6)
  }

  const newPath = path.join(originPath, `${prefix} - ${baseName}${ext}`)

  fs.renameSync(oldPath, newPath)

  return prefix
}
