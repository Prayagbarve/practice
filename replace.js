var arr = [1, 2, 9, 4, 899];

console.log("array is ===", arr);

for (var i = 0; i < arr.length; i++) {
    var newarr = arr[i].toString();

    //console.log("new aarr length is ...",newarr.length);

    for (var j = 0; j < newarr.length; j++) {

        // if((newarr.charAt(j)) == 9)

        if (newarr[j] == 9) {

              newarr  =  newarr.replace(newarr[j],0);
            newarr[j] = "0";

        }

    }

    arr[i] = newarr;

}

console.log("changed array is ====", arr);