var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var merge = function (leftArr, rightArr) {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i].avg >= rightArr[j].avg) {
            arr.push(leftArr[i]);
            i++;
        }
        else {
            arr.push(rightArr[j]);
            j++;
        }
    }
    arr.push.apply(arr, __spreadArray(__spreadArray([], leftArr.slice(i, leftArr.length), false), rightArr.slice(j, rightArr.length), false));
    return arr;
};
var mergeSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid, arr.length);
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    return merge(leftArr, rightArr);
};
var data = [
    { name: "Jack", science: 78, maths: 75, socialScience: 77 },
    { name: "Jimmy", science: 70, maths: 50, socialScience: 90 },
    { name: "Cloe", science: 90, maths: 90, socialScience: 90 },
];
var result = [];
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var student = data_1[_i];
    var avg = (student.maths + student.science + student.socialScience) / 3;
    var obj = { name: student.name, avg: avg };
    result.push(obj);
}
console.log(mergeSort(result));
