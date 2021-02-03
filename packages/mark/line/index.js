/**
 * 根据两点绘制直线
 * @param {*} ctx canvas 实例
 * @param {object} option 配置项
 */
const drawLine = (ctx, option) => {
    const {
        // 点序列
        points,
        // 线条颜色
        lineColor = '#76C1A6',
        // 线条宽度
        lineWidth = 2,
        // 是否虚线，[]代表直线，[2,2,2]代表按此格式画虚线，细节参考https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        lineDash = []
    } = option
    ctx.beginPath()
    ctx.setLineDash(lineDash)
    ctx.strokeStyle = lineColor
    ctx.lineWidth = lineWidth
    ctx.moveTo(points[0].x, points[0].y)
    ctx.lineTo(points[1].x, points[1].y)
    ctx.stroke()
}

export default drawLine