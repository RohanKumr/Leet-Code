function reverseString(s, i = 0) {
  const ln = s.length
  if (ln == 1) return s;
  const last = ln - 1 - i;
  if (i > last) return s;
  const temp = s[i];
  s[i] = s[last];
  s[last] = temp;
  return reverseString(s, ++i);
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
