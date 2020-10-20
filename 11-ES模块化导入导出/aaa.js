var name='小红'
function sum(a,b) {
   return a+b
}
//ES模块化导出方式一，先定义属性方法，然后整体导出
export {name,sum}
//导出方式二，定义方法属性的时候就导出
export  var age=18
//导出方式三，用default导出匿名方法属性，一个模块只允许导出一个匿名的
/*export  default  function () {
    console.log('匿名方法')
}*/
const jd='老师'
export  default  jd

export  var  sex='男'