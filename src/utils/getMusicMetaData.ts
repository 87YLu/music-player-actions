// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../types/mediainfo-wrapper.d.ts" />
import mi from 'mediainfo-wrapper'
import path from 'path'
import pickValue from './pickValue'

/**
 *
 * @param files 需要读取元数据的文件的路径数组
 * @param stepCallback 每读取完一个的回调
 */
export default (
  files: Array<string>,
  stepCallback?: (data: Array<string>) => any,
): Promise<Array<string[]>> => {
  const _files = [...files]

  return new Promise(resolve => {
    if (_files.length === 0) {
      resolve([])
    }

    const res: Array<string[]> = []
    const readMetaData = () => {
      mi({ maxBuffer: Number.MAX_SAFE_INTEGER }, _files.shift()).then((data: any) => {
        const { file, general } = data[0]
        const {
          title,
          album,
          composer,
          performer,
          album_composer: albumComposer,
          file_name: fileName,
        } = general

        const { name: realFileName } = path.parse(fileName?.[0] || '')
        const { base: fileRelativePath } = path.parse(file)

        const performerRes = pickValue([performer?.[0], composer?.[0], albumComposer?.[0]])
        const titleRes = pickValue([title?.[0], realFileName])

        res.push([fileRelativePath, titleRes, performerRes, album?.[0]])

        stepCallback && stepCallback([fileRelativePath, titleRes, performerRes, album?.[0]])

        if (_files.length > 0) {
          readMetaData()
        } else {
          resolve(res)
        }
      })
    }

    readMetaData()
  })
}
