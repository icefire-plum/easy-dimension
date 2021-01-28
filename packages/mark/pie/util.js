
/**
 * 对圆心坐标和半径验证
 * @param {array} arr 要验证的数组，默认长度为2
 * @param {string} text console提示的文字
 */
const illegalConsole = (arr, text) => {
    if(!arr) {
        console.error(text)
        return true
    }
    if(!(arr instanceof Array)) {
        console.error(text)
        return true
    }
    if(arr.length != 2) {
        console.error(text)
        return true
    }
    return false
}

export default illegalConsole