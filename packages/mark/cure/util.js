/**
 * 三次贝塞尔曲线求控制点
 * @param {*} ps 点位数组
 * @param {*} i 控制点索引
 * @param {*} lineSmooth 平滑度
 */
const getControlPoint = (ps, i, lineSmooth) => {
    let pAx = ''
    let pAy = ''
    let pBx = ''
    let pBy = ''
    // 第一段特殊处理
    if(i == 0) {
        pAx = ps[i].x + (ps[i + 1].x - ps[0].x) * lineSmooth
        pAy = ps[i].y + (ps[i + 1].y - ps[0].y) * lineSmooth
        pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * lineSmooth
        pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * lineSmooth
        return {
            pA: { x: pAx, y: pAy },
            pB: { x: pBx, y: pBy }
        }
    }
    // 最后一段特殊处理
    if(i == ps.length-2) {
        pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * lineSmooth
        pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * lineSmooth
        pBx = ps[i + 1].x - (ps[i + 1].x - ps[i].x) * lineSmooth
        pBy = ps[i + 1].y - (ps[i + 1].y - ps[i].y) * lineSmooth
        return {
            pA: { x: pAx, y: pAy },
            pB: { x: pBx, y: pBy }
        }
    }
    // 正常情况
    pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * lineSmooth
    pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * lineSmooth
    pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * lineSmooth
    pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * lineSmooth
    return {
        pA: { x: pAx, y: pAy },
        pB: { x: pBx, y: pBy }
    }
}

export default getControlPoint