
  function migrateRings(N, A, B, C) {
    let result = [];
  
    function move(N, A, B, C) {
      if (N === 0) return;
      move(N - 1, A, C, B);
      result.push(N + ": " + A + " to " + B);
      move(N - 1, C, B, A);
    }
  
    move(N, A, B, C);
    return result;
  }
  const value =   migrateRings(5,4,2,1)
  console.log(value);
