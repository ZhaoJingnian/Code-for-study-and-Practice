/**
 * Created by zzr_ruirui on 2017/9/13.
 */
//数组最大值:
var ary = [12, 54, 1, 9, 45, 88];

/*第一种：利用math函数*/
//math函数应该这么使用：
//Math.max(12,54,1,9,45,88);
var max = Math.max.apply(null, ary);
var min = Math.min.apply(null, ary);
console.log(max, min);


/*第二种：排序*/
ary.sort(function (a, b) {
    return a - b;
});
console.log(ary[0], ary[ary.length - 1]);


/*第三种：比较*/
var min = ary[0], max = ary[0];
for (var i = 0; i < ary.length; i++) {
    ary[i] < min ? min = ary[i] : null;
    ary[i] > max ? max = ary[i] : null;
}
console.log(min, max);


/*第四种：通过eval函数直接比较*/
//由于后面是字符串，无法执行：var max = Math.max(ary.toString());
var max = eval("Math.max(" + ary.toString() + ")");
var min = eval("Math.min(" + ary.toString() + ")");
console.log(min, max);
