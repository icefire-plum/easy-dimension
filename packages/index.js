import easyDimension from './mark'


// 安装方法， 
const install = (vue) => {
    if(install.installed) return
    install.installed = true
    vue.prototype.$easyMark = new EasyDimension() 
}

export default {
    install
}