function binarySearch(val, arr, low, high) {
    if(!low && !high) {
        var low = 0;
        var high = arr.length-1;
    }

    if (low > high) {
        return "Value not in array";
    }

    var mid = Math.floor((low+high) / 2);

    if (val < arr[mid]) {
        high = mid - 1
        return binarySearch(val, arr, low, high);
    }

    else if (val > arr[mid]) {
        low = mid + 1;
        return binarySearch(val, arr, low, high);
    }

    else {
        return mid;
    }
}

var array = [1,2,3,4,5,7];
console.log(binarySearch(7, array));

