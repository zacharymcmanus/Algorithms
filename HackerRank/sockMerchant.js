// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  1 and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2.

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameters:
//      n: the number of socks in the pile
//      ar: the colors of each sock

function sockMerchant(n, ar) {
    var count = 0;
    var h = {};
    
    for (var i = 0; i < n; i++) {
        if (ar[i] in h) {
            h[ar[i]] = h[ar[i]] + 1;
        } else {
            h[ar[i]] = 1;
        }
    }
    for (var key in h) {
        if (h.hasOwnProperty(key)) {
            count = count + ~~(h[key] / 2);
        }
    }

    return count;
}

