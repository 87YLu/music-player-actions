import isEmpty from './isEmpty'

export default (values: Array<any>) => {
  let res: any

  while (values.length > 0) {
    const temp = values.shift()

    if (isEmpty(temp) === false) {
      res = temp
      break
    }
  }

  return res
}
