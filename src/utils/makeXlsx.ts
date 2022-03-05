import fs from 'fs'
import xlsx from 'node-xlsx'
import path from 'path'
import { xlsxPath } from '../constant'

/**
 * 生成 xlsx 文件
 * @param {} data xlsx 数据
 */
export default (data: Array<Array<string>>) => {
  const { base: name } = path.parse(xlsxPath)
  const options = { '!cols': [{ wch: 10 }, { wch: 65 }, { wch: 80 }, { wch: 80 }] }
  const buffer = xlsx.build([{ name, data, options }])

  if (fs.existsSync(xlsxPath)) {
    try {
      fs.unlinkSync(xlsxPath)
    } catch {
      console.log('请关闭歌单文件后再尝试！')
      process.exit()
    }
  }

  fs.writeFileSync(xlsxPath, buffer)
}
