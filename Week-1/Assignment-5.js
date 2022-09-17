function count(input) {
    // your code here
    var all ={};
    while(input.length>0){
        var count=0;
        for(var i=0; i<input.length;i++){   
            if(input[i] === input[0]){
                count++;
            }
        }
        all[input[0]]=count;
        input=input.filter(function(e){
            return e !== input[0];
        });
    }
    return all;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
    // your code here
    var res ={};
   
    while(input.length>0){
        var val=0;
        for(var i=0; i<input.length;i++){       
            if(input[i].key===input[0].key){
                val+=input[i].value;
            }
        }

        res[input[0].key]=val;
        input=input.filter(function(e){
            return e.key !== input[0].key;
        });
    }
    return res;
}
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));