import merge from 'loadsh/merge'

import illegalConsole from './util'
/**
 * 根据
 * @param {} ctx canvas实例
 * @param {object} option 配置项
 */
const pie = (ctx, option) => {
    const {
        // 圆心,[30, 40]
        center,
        // 内外半径, [ 40, 50]
        radius,
        // 起始角，以弧度计算，默认从3点种方向开始
        startAngle = Math.PI * 0,
        // 结束角，以弧度计算，默认一周结束
        endAngle = Math.PI * 2,
        // 方向，默认逆时针，false 代表顺时针
        // *** 特别注意：无论顺时针还是逆时针角度的计算都是顺时针方向
        clockwise = true
    } = option
    // 非法圆心坐标提示
    if(illegalConsole(center, '请提供正确的圆心坐标，类似[100, 100]！！！')){
        return
    }
    // 非法半径坐标提示
    if(!radius || typeof radius != Number) {
        console.error('请提供正确的半径！！！')
    }
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
    ctx.beginPath()
    // 设置线条样式
    ctx.setLineDash(periphery.lineDash)
    ctx.lineWidth = periphery.lineWidth
    ctx.strokeStyle = periphery.color
    // 设置填充样式
    ctx.fillStyle = fill.color
    // 绘制形状
    ctx.arc(center[0], center[1], radius, startAngle, endAngle, clockwise)
    if(periphery.show) {
        ctx.stroke()
    }
    if(fill.show) {
        ctx.fill()
    }
}

export default pie