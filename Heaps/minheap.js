function addToHeap(heap,val){
    if(heap.length==0){
        heap.push("undefined");
        heap.push(val);
        return heap;
    }

    else{
        heap.push(val);
        var c = heap.length-1;
        var p = Math.trunc(c/2);
        while(heap[p] > heap[c] && p>=1){
            var temp = heap[c];
            heap[c] = heap[p];
            heap[p] = temp;
            c = p
            p = Math.trunc(c/2);
        }
    }
    return heap;
}
console.log(addToHeap(["undefined",3,7,9,15,12,11,10,16,18,20,25,16,13,20,21], 2));
