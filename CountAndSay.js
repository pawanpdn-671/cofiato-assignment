
var countAndSay = function (n) {
   let string = "1";

   for (let index = 1; index < n; ++index) {
      let newString = "";

      for (let i = 0; i < string.length; ++i) {
         let num = string[i];
         let count = 0;

         let j = i;
         while (j < string.length && string[j] == num) {
            ++count;
            ++j;
         }

         i = j - 1;

         newString += count + num;
      }

      string = newString;
   }

   return string;
};