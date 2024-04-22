let num1, num2, num3

num1=Number(prompt("Ingrese el primer número: "))
num2=Number(prompt("Ingrese el segundo número: "))
num3=Number(prompt("Ingrese el tercer número: "))

if(Number.isInteger(num1) && Number.isInteger(num2) &&Number.isInteger(num3)){
    //console.log("Los números ingresados son enteros")
    if(num1==num2){
      console.log("Número 1 y número 2 son iguales")
      if(num1>num3||num2>num3){
        console.log("De mayor a menor: " +num1 +", " + num2+", " + num3)
        console.log("De menor a mayor: " + num3+", " + num2+", " + num1)
      }else{
        console.log("De mayor a menor: " + num3+", " + num2+", " + num1)
        console.log("De menor a mayor: " + num1+", " + num2+", " + num3)
      }
    }else if(num2==num3){
      console.log("Número 2 y número 3 son iguales")
      if(num2>num1||num3>num1){
        console.log("De mayor a menor: " +num2+", " + num3+", " + num1)
        console.log("De menor a mayor: " + num1 +", " + num2 +", " + num3)
      }else{
        console.log("De mayor a menor: " +num1+", " + num2+", " + num3)
        console.log("De menor a mayor: " +num3+", " + num2+", " + num1)
      }
    }else if(num1==num3){
      console.log("Número 1 y número 3 son iguales")
      if(num1>num2||num3>num2){
        console.log("De mayor a menor: " +num1+", " + num3+", " + num2)
        console.log("De menor a mayor: " + num2+", " + num3+", " + num1)
      }else{
        console.log("De mayor a menor: " +num2+", " + num1+", " + num3)
        console.log("De menor a mayor: " +num3+", " + num1+", " + num2)
      }
    }else{
      if(num1>num3 && num2>num3){
        //console.log("Numero 3 es menor")
        if(num1>num2){
          //console.log("Numero 1 es mayor, Numero 2 es del centro")
          console.log("De mayor a menor: " +num1+", " + num2+", " + num3)
          console.log("De menor a mayor: " +num3+", " +num2+", " +num1)
        }else{ 
          //console.log("Numero 2 es mayor, Numero 1 es del centro")
          console.log("De mayor a menor: " +num2+", " +num1+", " + num3)
          console.log("De menor a mayor: " +num3+", " + num1+", " + num2)
          
          }
      }else if(num1>num2 && num3>num2){
        //console.log("Número 2 es menor")
        if(num1>num3){
          //console.log("Numero 1 es mayor, numero 3 en el centro")
          console.log("De mayor a menor: " +num1+", " +num3+", " + num2)
          console.log("De menor a mayor: " +num2+", " + num3+", " + num1)
        }else{
          //console.log("Numero 3 mayor, num1 en el centro")
          console.log("De mayor a menor: " +num3+", " + num1+", " + num2)
          console.log("De menor a mayor: " +num2+", " + num1+", " + num3)
        }
        
      }else if(num2>num1 && num3>num1){
        //console.log("Numero 1 es menor")
        if(num2>num3){
          //console.log("Num2 mayor, num3 centro")
          console.log("De mayor a menor: " +num2+", " + num3+", " + num1)
          console.log("De menor a mayor: " +num1+", " + num3+", " + num2)
        }else{
          //console.log("Num3 mayor, num2 centro")
          console.log("De mayor a menor: " +num3+", " + num2+", " + num1)
          console.log("De menor a mayor: " +num1+", " + num2+", " + num3)
        }
      }
       
  }
}else{
    console.log("Uno de los números ingresados no es entero")
}
