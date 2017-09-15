/**
 * Created by ZJN on 2017/9/13.
 */
//给二维数组排序:
var ary = [
    {name: "abc", age: 1},
    {name: "abcd", age: 12},
    {name: "abce", age: 13},
    {name: "abcf", age: 14},
    {name: "abcg", age: 15}
];
//按照年龄由小到大排序：
var newAry = ary.sort(function (a, b) {
    return a.age - b.age;
});
//按照姓名由小到大排序：
var newAry = ary.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
