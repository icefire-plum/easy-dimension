import EasyDimension from './mark'


// 安装方法， 
const install = (vue) => {
    if(install.installed) return
    install.installed = true
    vue.prototype.$easyDimension = new EasyDimension() 
}

export default {
    install
}