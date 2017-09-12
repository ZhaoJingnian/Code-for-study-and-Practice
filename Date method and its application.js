/**
 * Created by ZJN on 2017/9/12.
 */
//Turn the current computer's time into the following format:2015年05月24日 星期日 15时31分27秒
//把当前电脑的时间变成如下格式：2015年05月24日 星期日 15时31分27秒
function formatTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1; //0-11代表1-12月
    var day = time.getDate();
    var week = time.getDay(); //0-6代表周日-周六
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();

    var weekStr = "日一二三四五六";
    var newWeek = weekStr.charAt(week);

    return year + "年" + addZero(month) + "月" + addZero(day) + "日" + " 星期" + newWeek + " " + addZero(hour) + "时" + addZero(minutes) + "分" + addZero(second) + "秒";
}
function addZero(value) {
    return value > 10 ? value : "0" + value;
}
formatTime();
