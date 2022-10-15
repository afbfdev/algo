var s = ''
var i , c = 0
var k = 1
var j = " "
s = prompt('ecrivez une phrase se terminant par un point')
for (i = 0 ; i < s.length ; i++){
    if (s[i] == j)
        k++
    else if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
        c++
}
console.log('le nombre de caractere est : ' + i + ',le nombre de mot est : ' + k + ' et le nombre de voyelle est : ' +c)