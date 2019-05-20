function selectionSort(arr) {
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([22,88,33,21,100]));