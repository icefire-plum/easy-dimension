import merge from 'loadsh/merge'
import arrDetect from '../../util'

/**
 * 根据系列点画多边形
 * @param {*} ctx 
 * @param {*} option 
 */
const polygon = (ctx, option) => {
    const {
        points,
    } = option
    
    // 线条样式
    // 默认值
    const periphery = {
        // 是否显示
        show: false,
        // 颜色
        color: 'red',
        // 线宽
        lineWidth: 2,
        // 虚线，空代表实线
        lineDash: []
    }
    merge(periphery, option.periphery)
    // 填充样式
    const fill = {
        show: true,
        color: 'red'
    }
    merge(fill, option.fill)
    // 检测点序列至少包含3个点
    if(arrDetect(points, '>=3', '画平面请至少提供3个不相同的点位坐标！！！')) {
        return
    }
    ctx.beginPath()
    // 设置线条样式
    ctx.setLineDash(periphery.lineDash)
    ctx.lineWidth = periphery.lineWidth
    ctx.strokeStyle = periphery.color
    // 设置填充样式
    ctx.fillStyle = fill.color
    // 点连成线
    points.forEach((item, index) => {
        if(index == 0) {
            ctx.moveTo(item.x, item.y)
        } else {
            ctx.lineTo(item.x, item.y)
        }
    })
    if(periphery.show) {
        ctx.stroke()
    }
    if(fill.show) {
        ctx.fill()
    }
}

export default polygon