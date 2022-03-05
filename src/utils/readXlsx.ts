import xlsx from 'node-xlsx'
import { xlsxPath } from '../constant'

/**
 * 读取 xlsx 文件
 */
export default () => {
  return xlsx.parse(xlsxPath)[0].data.filter(item => (item as Array<string>).length > 0)
}
