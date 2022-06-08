function reverse (s, i = 0, n= null) {

	if ( i == n) return s
	let startingIndex =  i;
	let endingIndex = n  || s.length - 1

	const temp = s[startingIndex];
	s[startingIndex] = s[endingIndex];
	s[endingIndex] = temp

	if(i == s.length  / 2  ) return s
	return reverse(s, ++startingIndex , --endingIndex )	
}
/* const input = ['h', 'e', 'l','t','o', 'i','a','b','c','d','e','g'] */
const input = ['a','b','c','d','e','f']
const ans = reverse(input);
/* console.log(ans) */


function verify() {
	const rev = input.reverse();
	return ans == rev
}

console.log(verify())
