import fs from 'fs'
import path from 'path'
import ProgressBar from 'progress'
import { getMusicMetaData, isFormated, reName, readXlsx, makeXlsx } from './utils'
import { originPath } from './constant'

export default async () => {
  const files = fs
    .readdirSync(originPath)
    .filter(item => isFormated(item) === false)
    .map(item => path.join(originPath, item))
  const bar = new ProgressBar(':bar :percent', { total: files.length, width: 20 })
  const res: Array<Array<string>> = []

  console.log('程序运行中...')

  await getMusicMetaData(files, data => {
    const prefix = reName(data[0], data[1])
    res.push([prefix, ...data.slice(1, 4)])
    bar.tick()
  })

  const oldData = readXlsx()

  makeXlsx([...(oldData as Array<Array<string>>), ...res])

  console.log('完成！')
}
