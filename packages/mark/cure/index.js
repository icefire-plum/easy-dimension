import getControlPoint from './util'

/**
 * 根据一系列点绘制曲线
 * @param {} ctx canvas实例
 * @param {object} option 配置项
 */
const curve = (ctx, option) => {
    const {
        // 点序列
        points,
        // 线条颜色
        lineColor,
        // 线条宽度
        lineWidth = 2,
        // 曲线平滑度
        lineSmooth = 0.2,
        // 是否虚线，[]代表直线，[2,2,2]代表按此格式画虚线，细节参考https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        lineDash = []
    } = option

    if(points.length <= 2) {
        console.warn('绘制曲线至少需要3个点!')
        return
    }
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    ctx.strokeStyle = lineColor
    ctx.lineWidth = lineWidth
    ctx.setLineDash(lineDash)
    for(let i=1;i<points.length;i++) {
        var ctrlP = getControlPoint(points,i-1, lineSmooth)
        ctx.bezierCurveTo(ctrlP.pA.x, ctrlP.pA.y, ctrlP.pB.x,ctrlP.pB.y, points[i].x, points[i].y)
    }
    ctx.stroke()
  }

  export default curve