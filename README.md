# duckling.javascript.kit
小鸭子js套件；日期函数，vueajax封装


var dateVal=new Date();
dateVal.format("yyyy-MM-dd HH:mm");



var numberVal=new Date().getTime();
numberVal.format("yyyy-MM-dd HH:mm");

var objectVal:Date|number|null;
objectVal?.format("yyyy-MM-dd HH:mm");





更新npm
https://www.npmjs.com/
修改package.json 版本号，最好在README修改使用文档
npm run build
npm publish     根目录执行命令，推上去
https://www.jianshu.com/p/c8a6f1a14e8b/


其他项目使用yarn升级
yarn upgrade-interactive --latest