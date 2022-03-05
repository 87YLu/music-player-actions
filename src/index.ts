import fs from 'fs'
import { xlsxPath } from './constant'
import forceRun from './forceRun'
import normalRun from './normalRun'

if (['force', 'f'].includes(process.argv[2])) {
  forceRun()
} else {
  if (fs.existsSync(xlsxPath)) {
    normalRun()
  } else {
    forceRun()
  }
}
