/**
 * 检测数是否存在及长度是否合规
 * @param {*} arr 需要检测的数组
 * @param {*} compareLen 比较长度，< > == <= >=
 * @param {*} text 不通过检测提示文字
 */
const arrDetect = (arr, compareLen, text) => {
    if(!arr) {
        console.error(text)
        return true
    }
    if(!(arr instanceof Array)) {
        console.error(text)
        return true
    }
    if(!eval(`${arr.length}${compareLen}`)) {
        console.error(text)
        return true
    }
    return false
}

export default arrDetect