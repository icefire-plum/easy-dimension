
/**
 * 根据中心坐标，顶点数量和中心到顶点距离计算各顶点序列
 * @param {*} center 中心坐标
 * @param {*} distance 中心到顶点距离
 * @param {*} peakNum 顶点个数
 * @param {*} startAngel 起始顶点弧度
 * @return {} 顶点序列
 */
const getPeak = (center, peakNum, distance, startAngel) => {
    // 计算每一小块的弧度
    const corner = Math.PI * 2 / peakNum 
    const peaks = []
    for(let i=0;i<=peakNum;i++) {
        const x = center[0] + distance * Math.cos(startAngel)
        const y = center[1] - distance * Math.sin(startAngel)
        startAngel += corner
        peaks.push({x, y})
    }
    return peaks
}

export {
    getPeak
}