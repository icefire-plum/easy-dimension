import merge from 'loadsh/merge'
import arrDetect from '../../util'
import { getPeak } from './util'
import polygon from '../polygon/index'

/**
 * 给定中点，多边形定点数及中点到定点距离绘制正多边形
 */
const eqlPolygon = (ctx, option) => {
    const {
        center,
        peak = 3,
        distance,
        startAngel = 0,
        periphery,
        fill
    } = option
    // 检测数据完整性
    if(arrDetect(center, '==2', '请提供正确的中心坐标，类似[30, 30]！！！')) {
        return
    }
    if(typeof distance != 'number') {
        console.error('请提供正确的中点到顶点长度！！！')
        return
    }
    // 计算各个顶点坐标
    const peaks = getPeak(center, peak, distance, startAngel)
    // 绘制形状
    const polygonOption = {
        points: peaks,
        periphery,
        fill
    }
    polygon(ctx, polygonOption)

}

export default eqlPolygon