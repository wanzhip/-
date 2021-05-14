// 源码
export function query (el: string | Element): Element {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

// 首先query函数判断是否是string类型，如果是string类型，就通过querySelector函数获取页面中的元素，
// 但是querySelector仅仅返回匹配指定选择器的第一个元素，所以这就解释了为什么第二个div会原封不动。