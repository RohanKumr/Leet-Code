function reverse (s, i = 0, n= null) {
		if(i == (s.length - 1) /2){
    	return s
    } else {
    	const end = i == s.length / 2 
      
    	let startingIndex =  i;
      let endingIndex = n || s.length - 1
			
      const temp = s[startingIndex];
			s[startingIndex] = s[endingIndex];
			s[endingIndex] = temp
			
      if (end) return s;
      return reverse(s, ++startingIndex , --endingIndex )	
    }
}
const input = ['h', 'e', 'l','t','o', 'i']
const ans = reverse(input);
console.log(ans)
