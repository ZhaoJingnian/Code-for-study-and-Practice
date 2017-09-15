/**
 * Created by ZJN on 2017/9/13.
 */
/*求平均值，类数组转为数组*/

function avg() {
    var ary = [];
    for (var i = 0; i < arguments.length; i++) {
        ary[i] = arguments[i];
    }
    ary.sort(function (a, b) {
        return a - b;
    });
    ary.shift();
    ary.pop();
    return (eval(ary.join("+")) / ary.length).toFixed(2);
}
var myAvg = avg(12, 45, 56, 8, 52, 10, 99, 5);
console.log(myAvg);


//当数组中的slice方法参数为0或不写的时候，表示克隆一份一样的数组
var newAry = Array.prototype.slice.call(arguments);
//或 [].slice.call(arguments);
console.log(newAry);


//即最终代码为：
function avg() {
    var ary = Array.prototype.sort.call(arguments, function (a, b) {
        return a - b;
    });
    ary.shift();
    ary.pop();
    return (eval(ary.join("+")) / ary.length).toFixed(2);
}
var myAvg = avg(12, 45, 56, 8, 52, 10, 99, 5);
console.log(myAvg);


//类数组转为数组，用单例模式实现：
var utils = {
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[i] = likeAry[i];
            }
        }
        return ary;
    }
};
var newAry = [10, 45, 8, 6, 3, 11];
console.log(utils.listToArray(newAry));
