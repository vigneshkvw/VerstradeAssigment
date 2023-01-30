function getBalancedSubstrings(S) {
    let maxLength = 0;
    let result = [];
    for (let i = 0; i < S.length; i++) {
      let charCount = {};
      charCount[S[i]] = 1;
      for (let j = i + 1; j < S.length; j++) {
        if (charCount[S[j]]) {
          charCount[S[j]]++;
        } else {
          charCount[S[j]] = 1;
          if (Object.keys(charCount).length > 2) break;
        }
        if (Object.values(charCount).every(val => val === Object.values(charCount)[0]) && Object.values(charCount).length === 2) {
          if (j - i + 1 > maxLength) {
            maxLength = j - i + 1;
            result = [S.slice(i, j + 1)];
          } else if (j - i + 1 === maxLength) {
            result.push(S.slice(i, j + 1));
          }
        }
      }
    }
    return result;
  }
  const value =  getBalancedSubstrings('aaaaaaa')
console.log(value);
