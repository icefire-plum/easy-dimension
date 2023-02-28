
// 随机id
const generateId = () => {
    return `easyMark${Date.now()}`
}

// 初始化canvas 实例
const init = (domId, _canvasId) => {
    // 如果dom不存在，不能初始化
    if(!domId) {
        console.error('请指定需要标注的dom，否则标注器无法进行标注！')
        return
    }
    const dom = document.querySelector('#'+domId)
    if(!dom) {
        console.error('请提供正确的dom id!')
        return
    }
    let canvasId = ''
    // 新增canvas
    if(!_canvasId) {
        // 追加canvas 元素到dom
        canvasId = generateId()
        var canvasStr = `<canvas id="${canvasId}" style="position: relative; z-index:1000"></canvas>`
        dom.innerHTML += canvasStr
    } else {
        canvasId = _canvasId
    }


    // 获取容器尺寸
    let containerW = dom.offsetWidth
    let containerH = dom.offsetHeight

    // 设置画布大小
    let canvas = document.querySelector(`#${canvasId}`)
    const ctx = canvas.getContext('2d')
    canvas.setAttribute('width', containerW)
    canvas.setAttribute('height', containerH)
    return { ctx, canvasId, containerW,  containerH }

}

export default init
    