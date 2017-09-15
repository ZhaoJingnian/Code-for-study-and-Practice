/**
 * Created by ZJN_ruirui on 2017/9/15.
 */
//获取一个字符串中出现次数最多的字符，并且获取出现的次数：
var str = "diuwbabwcelviureivbajvl";
var obj={};
var max = 0;
var ary = [];
str.replace(/[a-z]/gi,function () {
    var val = arguments[0];
    obj[val]>=1?obj[val]+=1:obj[val]=1;
});
for(var key in obj){
    obj[key]>max?max=obj[key]:max;
}
for(var key in obj){
    obj[key]===max?ary.push(key):null;
}
console.log("出现最多的字符是"+ary.toString()+"次数是"+max);
