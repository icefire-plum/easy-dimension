import initEasyDimension from './init'
import line from './line/index'
import cure from './cure/index'
import pie from './pie/index'
import polygon from './polygon/index'
import eqlPolygon from './eqlPolygon/index'


class EasyDimension {
    constructor() {
        this.ctx = ''
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
        this.ctx = initEasyDimension(domId)
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
}


export default EasyDimension