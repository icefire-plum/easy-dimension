
/**
 * 根据一系列点及各个点对应的绘制方式绘制一系列图形
 * @param {*} EasyDimension 
 * @param {*} option 
 * @param {*} callback 各个点对应的绘制方法
 */
const points = (EasyDimension, option, callback="drawPie") => {
    const { pointOption = {
        center: [0, 0],
        radius: 2
    } } = option
    // 验证各个点对应的图形是否具有中心 center 属性
    if(!pointOption.center) {
        console.warn('各个点自定义图形应提供具有中心属性的图像，若无将静默失败！！！')
        return
    }
    // 默认圆点支持半径和颜色配置
    if(!option.pointOption && option.radius) {
        pointOption.radius = option.radius
    }
    if(!option.pointOption && option.color) {
        pointOption.fill = {
            color: option.color
        }
    }
    for (const iterator of option.points) {
        pointOption.center[0] = iterator.x
        pointOption.center[1] = iterator.y
        EasyDimension[callback](pointOption)
    }
}

export default points