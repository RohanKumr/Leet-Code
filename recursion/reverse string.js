function reverseString (s, i = 0, n= null) {
	if(s.length === 1) return s
	if (  i == n) return s
    	
	let startingIndex =  i;
      	let endingIndex = n  || s.length - 1
			
     	const temp = s[startingIndex];
	s[startingIndex] = s[endingIndex];
	s[endingIndex] = temp
      
	if(i == (s.length / 2) - 1 ) return s
     	return reverseString(s, ++startingIndex , --endingIndex )	
}

const input = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
// const input = ["/'"]

const ans = reverseString(input);
/* console.log(ans) */


function verify() {
	const rev = input.reverse();
	return ans == rev
}

console.log(verify())
