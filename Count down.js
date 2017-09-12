/**
 * Created by ZJN on 2017/9/12.
 */
//Count down 倒计时

var tarTime = new Date("2019/1/1 12:12:22"); //输入要倒计时的时间
var nowTime = new Date(); //现在时间
var tarSpan = tarTime.getTime(); //要倒计时的时间 距离1970年1月1日午夜（00:00）之间的毫秒差
var nowSpan = nowTime.getTime();
var diffTime = tarSpan - nowSpan; //两者的毫秒差

//用毫秒算出还有多少天、小时、分钟、秒
var day = Math.floor(diffTime / (24 * 60 * 60 * 1000)); //向下取整，算出包含多少天
var dayMs = day * 24 * 60 * 60 * 1000; //算出这些天占了多少毫秒
var spanMs = diffTime - dayMs; //减去天数的占用毫秒数
var hour = Math.floor(spanMs / (60 * 60 * 1000)); //向下取整，算出包含多少小时
var hourMs = hour * 60 * 60 * 1000; //算出这些小时占了多少毫秒
var spanMs = spanMs - hourMs; //减去小时的占用毫秒数
var minute = Math.floor(spanMs / (60 * 1000)); //向下取整，算出包含多少分钟
var minuteMs = minute * 60 * 1000; //算出这些分钟占了多少毫秒
var spanMs = spanMs - minuteMs; //减去分钟的占用毫秒数
var second = Math.floor(spanMs / 1000); //向下取整，算出包含多少秒

function addZero(value) {
    return value > 10 ? value : "0" + value;
}

console.log(addZero(day) + "天" + addZero(hour) + "小时" + addZero(minute) + "分钟" + addZero(second) + "秒");

