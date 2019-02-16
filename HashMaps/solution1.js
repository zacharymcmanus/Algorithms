var hashMap = [];
hashMap.length = 30;

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char; 
        hash &= hash;                
    }
    return hash;
}
// Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
var hashedKey = "role".hashCode();


function mod(input, div){
    return (input % div + div) % div;
}
// use the function to get the index position where we should store our data
var idx = mod(hashedKey, hashMap.length);


functionadd(map,key,value){
    var x = key.hashcode();
    var y = mod(x, 10);
    var z = [];
    z.push(key);
    z.push(value);
    if(map[y]){
        map[y].push(z);
    } else {
        map[y] = [];
        map [y].push(z);
    }


    for(var i=0; i < map[y].length; i++){
        if(map[y][i][0] == key){
            map[y[i]][1] = value;
            return;
        }
    }
}