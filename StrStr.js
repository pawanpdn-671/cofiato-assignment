var strStr = function (haystack, needle) {
   if (needle.length == 0) {
      return 0;
   }

   if (haystack.length < needle.length) {
      return -1;
   }

   let i = 0, j = 0;
   let index;

   while (i < haystack.length) {
      if (haystack[i] == needle[j]) {
         index = i;
         while (haystack[i] == needle[j] && j < needle.length) {
            i++;
            j++;
         }

         if (j == needle.length) {
            return index;
         } else {
            j = 0;
            i = index + 1;
         }
      } else {
         i++;
      }
   }

};
