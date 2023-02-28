import initEasyDimension from './init'
import line from './line/index'
import cure from './cure/index'
import pie from './pie/index'
import polygon from './polygon/index'
import eqlPolygon from './eqlPolygon/index'
import points from './points/index'
import ellipse from './ellipse/index'


class EasyDimension {
    constructor() {
        this.ctx = ''
        this.handlers = []
        this.canvans = ''
        this.domId = ''
        this.canvasW = ''
        this.canvasH = ''
    }
    // 检测canvas 是否实例化
    detectCtx() {
        if(!this.ctx) {
            console.error('canvas 还未初始化，请使用easyMark.init()进行初始化!')
            return false
        }
        return true
    }
    // 初始化canvas 实例
    init(domId) {
        const { ctx, canvasId, containerW, containerH } = initEasyDimension(domId)
        this.ctx = ctx
        this.canvans = canvasId
        this.domId = domId
        this.canvasW = containerW
        this.canvasH = containerH
        this.resize()
    }
    // 页面缩放
    resize() {
        window.onresize = () => {
            const { ctx, containerW, containerH } = initEasyDimension(this.domId, this.canvans)
            this.ctx = ctx
            this.canvasW = containerW
            this.canvasH = containerH
            this.handlers.forEach(item => item.handler(...item.params))
        }
    }
    // 画直线
    drawLine(option) {
        if(this.detectCtx()){
            line(this.ctx, option)
        }
    }
    // 画曲线
    drawCure(option) {
        if(this.detectCtx()) {
            cure(this.ctx, option)
        }
    }
    // 画圆
    drawPie(option) {
        if(this.detectCtx()) {
            pie(this.ctx, option)
        }
    }
    // 画多变形
    drawPolygon(option) {
        if(this.detectCtx()) {
            polygon(this.ctx, option)
        }
    }
    // 正多变形
    drawEqlPolygon(option) {
        if(this.detectCtx()) {
            eqlPolygon(this.ctx, option)
        }
    }
    // 一系列点
    drawPoints(option, callback) {
        if(this.detectCtx()) {
            points(this, option, callback)
        }
    }
    // 椭圆
    drawEllipse(option) {
        if(this.detectCtx()) {
            this.handlers.push(
                {
                    handler: ellipse,
                    params: [this.ctx, option]
                }
            )
            ellipse(this.ctx, this.canvasW, this.canvasH, option)
        }
    }
}


export default EasyDimension