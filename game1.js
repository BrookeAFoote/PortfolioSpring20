var user = prompt("What will be your name?");
var userHealth = 40;
var grantHealth = 10;

while (userHealth > 0 && grantHealth > 0) {
    userHealth -= Math.floor(Math.random() * 2) + 1 ;
    console.log (user + " has " + userHealth + " left.");
   
   
  grantHealth -= Math.floor(Math.random() * 2) + 1;
    console.log ("Grant has " + grantHealth + " left.");  
    
    if (grantHealth === 0) {
      grantHealth += 10;
     
     
     
     /* for(var i = 0; i < 3; i++) {
      grantHealth += 10
    }
    }
    
    /*for(var i = 0; i < 3; i++) {
      grantHealth += 10
    }*/
    
      
    }

