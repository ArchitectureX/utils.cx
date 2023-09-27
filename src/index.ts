function cx(...classes: any): string {
  const classArr = []

  for (let i = 0; i < classes.length; i += 1) {
    const arg: any = classes[i]

    if (!arg) {
      continue
    }

    const type = typeof arg

    if (type === 'string' || type === 'number') {
      classArr.push(arg)
    }

    if (Array.isArray(arg)) {
      classArr.push(cx(...arg))
    }

    if (type === 'object') {
      if (
        arg.toString !== Object.prototype.toString &&
        !arg.toString.toString().includes('[native code]')
      ) {
        classArr.push(arg.toString())
        continue
      }

      for (const key in arg) {
        if (arg[key]) {
          classArr.push(key)
        }
      }
    }
  }

  return classArr.join(' ')
}

export default cx
