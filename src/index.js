const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')

const getRangeCode = (len = 6) => {
  const orgStr = 'abcdefghijklmnopqrstuvwxyz'
  let returnStr = ''

  for (let i = 0; i < len; i += 1) {
    returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length))
  }

  return returnStr
}

const musicsPath = path.join(__dirname, '../../MUSIC')

fs.readdirSync(musicsPath)
  .map((item) => path.join(musicsPath, item))
  .forEach((item, index) => {
    ffmpeg.ffprobe(item, (_, metadata) => {
      const { format_name, tags } = metadata?.format || {}
      const { TITLE: title } = tags || {}

      if (title && format_name) {
        try {
          fs.renameSync(item, path.join(musicsPath, `${getRangeCode()} - ${title}.${format_name}`))
        } catch {
          console.log(item)
        }
      }
    })
  })
