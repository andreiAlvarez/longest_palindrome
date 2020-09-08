// solution 1
longestPalindrome=function(s){
  var longest = 0;
  
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      var str = s.slice(i, j);
      if (isPalindrome(str) && longest < str.length) {
        longest = str.length;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}

//clever

var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
