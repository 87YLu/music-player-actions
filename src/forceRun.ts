import fs from 'fs'
import path from 'path'
import ProgressBar from 'progress'
import { getMusicMetaData, isFormated, reName, makeXlsx } from './utils'
import { originPath } from './constant'

export default async () => {
  const files = fs.readdirSync(originPath).map(item => path.join(originPath, item))
  const bar = new ProgressBar(':bar :percent', { total: files.length, width: 20 })
  const res: Array<Array<string>> = []

  console.log('程序运行中...')

  await getMusicMetaData(files, data => {
    let prefix: string
    if (isFormated(data[0])) {
      prefix = data[0].match(/[a-z]{6} - /)![0].replace(' -', '')
    } else {
      prefix = reName(data[0], data[1])
    }
    res.push([prefix, ...data.slice(1, 4)])
    bar.tick()
  })

  makeXlsx(res)

  console.log('完成！')
}
