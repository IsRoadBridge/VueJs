import  {name,sum} from  './aaa.js'

console.log(name);
console.log(sum(12, 23));
//导入方式一：导入自己想要使用的属性和方法
import  {age} from './aaa.js'

console.log(age);
//导入方式二：导入匿名属性并自己命名
import aaa from "./aaa.js";

console.log(aaa);
//导入方式三：导入整个模块
import  * as obj from  './aaa.js'

console.log(obj.sex)