var merge = function (left, right) {
    var arr = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i]);
            i++;
        }
        else {
            arr.push(right[j]);
            j++;
        }
    }
    arr.push.apply(arr, left.slice(i, left.length));
    arr.push.apply(arr, right.slice(j, right.length));
    return arr;
};
var mergeSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, arr.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
};
var arr = [3, 2, 1, -1, 0, 9, 2];
console.log(mergeSort(arr).join(" "));
