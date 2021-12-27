export default class Utils {
  // vite动态引入图片封装
  getSrc = (name) => {
    const path = `./../assets/images/${name}.png`
    // const modules = import.meta.globEager(`./../assets${track}/*`)
    const modules = import.meta.globEager('./../assets/images/*')
    return modules[path].default
  }
}
