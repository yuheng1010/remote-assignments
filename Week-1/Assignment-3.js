function max(numbers) {
    var max = numbers[0];
   // your code here, for-loop method preferred
   for (var i = 0; i < numbers.length; i++) {
       if(i+1<=numbers.length){
           if(numbers[i]<numbers[i+1] && numbers[i+1]>max){
               max=numbers[i+1];
           }
       }else{
           return max;
       }
   }
   return max;
}
function findPosition(numbers, target) {
   // your code here, for-loop method preferred
   var temp=0;
   for(var i=0;i<numbers.length;i++){
       if(numbers[i]===target){
           temp++;
           return i;
       }
   }
   if(temp===0){
       return -1;
   }
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1