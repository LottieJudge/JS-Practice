  function ArrayChallenge(arr) { 
      let maxProf = 0
      let min = arr[0]
      for(i = 0; i < arr.length; i ++){
        let profSum = arr[i] - min
        if(profSum > maxProf){
          maxProf = profSum
        }
        if (profSum <= 0){
          maxProf = -1
        }
        if(arr[i] < min){
          min = arr[i]
        }
      }
      return maxProf; 
    
    }
    console.log(ArrayChallenge([14,20,4,12,5,11]));