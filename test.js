var arr = [4, 7, 10, 7, 6, 9];
var count = 0;

for(var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++) {
        var res = [];
        for(var k = i; k <= j; k++) {
            res.push(arr[k]);
        }
        console.log(res)
        var sum = 0;
        var c = 0;
        for(var l = 0; l < res.length; l++) {
            sum += res[l];
        }
        for(var m = 0; m < res.length; m++) {
            if(res[m] == sum) {
                c++;
            }
        }
        if(c > 0) {
            count++;
        }
    }
}
console.log(count+1);


