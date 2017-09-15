/**
 * Created by ZJN on 2017/9/13.
 */

//把JSON格式文件转换成字符串：
var jsonObj = {"name": "abc", age: 7};
var jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr); //'{"name":"abc","age":7}'


var ary = [
    {
        "title": "qndcacaivncia",
        "desc": "dvowmviwmfo"
    },
    {
        "title": "dsafwefcacaivncia",
        "desc": "dvoefwqefewqmviwmfo"
    }
];
//数据绑定——文档碎片模式：
var frg = document.createDocumentFragment(); //相当于创建了一个容器
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    var oLi = document.createElement("li");
    oLi.innerHTML = "<span></span>" + cur.title;
    frg.appendChild(oLi);
}
oUl.appendChild(frg);
frg = null;




//表格排序：
/*
 HTML代码：
 <ul id="ul1">
 <li>20</li>
 <li>23</li>
 <li>2</li>
 <li>28</li>
 </ul>
 */
var oUl = document.getElementById("ul1");
var oLis = oUl.getElementsByTagName("li");
//此时oLis是一个类数组
var ary = utils.listToArray(oLis); //把数组转换成类数组
//给数组排序：
ary.sort(function (a, b) {
    return a.innerHTML - b.innerHTML;
});
//文档碎片方式添加到页面中：
var frg = document.createDocumentFragment();
for (var i = 0; i < ary.length; i++) {
    frg.appendChild(ary[i]);
}
oUl.appendChild(frg);
frg = null;
