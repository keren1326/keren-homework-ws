var salary =parseFloat(prompt("Entrez votre salaire")) ;
var amount = 0;


if(salary<=25000){
    amount=salary*0.10;
}
else{
    amount=25000*0.10;
    salary-= 25000;
    
       if(salary<=50000){
          amount=amount+(salary*0.20);
        }
        else{
         amount=(50000*0.20)+amount;
         salary-= 50000;

             if(salary<=100000){
               amount=amount+(salary*0.30);
            }
             else{
              amount=amount+(100000*0.30);
              salary-= 100000;
                
                 if(salary<=150000){
                    amount=amount+(salary*0.40);
                }
                 else{
                    
                    amount=amount+(salary*0.50);
                     
             
             }  
            }  
        }
}


alert(amount);