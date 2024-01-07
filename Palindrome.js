let checkPalindrome = function(n){
    let reverse  = '';
    
    for (let i = n.length-1; i >= 0; i--) {
        reverse += n[i]
        
    }
    if (reverse == n) {
        return true
    }
    else{
        return false
    }
    
    }
    let Input = 234;
    let convert = Input.toString();
    let check = checkPalindrome(convert);
    console.log(check)