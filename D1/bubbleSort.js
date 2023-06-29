var swap = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var bubbleSort = function (arr, N) {
    for (var i = 0; i < N - 1; i++) {
        var isSwapped = false;
        for (var j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                isSwapped = true;
                swap(arr, j, j + 1);
            }
        }
        if (!isSwapped) {
            break;
        }
    }
};
var arr = [3, 2, 1, -1, 0];
var N = arr.length;
bubbleSort(arr, N);
console.log(arr.join(" "));
