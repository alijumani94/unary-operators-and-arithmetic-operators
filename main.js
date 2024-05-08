var a = 7;
var result = --a + a-- - ++a + a + a-- + a - a + ++a + a--;
//      6 + 6   -   6 + 6 + 6   + 5 -5 +   6 + 6 = 30
console.log(result);
