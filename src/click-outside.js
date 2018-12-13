let onClickDocument = (e) => {
  let { target } = e
  callbacks.forEach(item => {
    // item.el item.callback
    if (target === item.el || item.el.contains(target)) {
      return
    } else {
      item.callbacks()
    }
  })
}
document.addEventListener('click', onClickDocument)
let callbacks = []
export default {
  bind: function (el, binding, vnode) {
    callbacks.push({ el, callbacks: binding.value })
  }
}

let removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

export { removeListener }