class Conciclo{
    //1) Sumar dos numeros siempre cuando el promero sea mayor al segundo
    sumadedosnumeros(){
        console.log("1) Sumar dos numeros siempre cuando el promero sea mayor al segundo")
     let num1=25
     let num2=10
     let suma=0
     let ops="+"
     if (num1>num2){
        suma=num1+num2
        console.log("La suma de",num1, ops, num2, "=", suma)
    }
        else{
            console.log("El Primer Numero Debe ser Mayor")
        }
     
    }
   // 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
    operaciones(){
        console.log("2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
      let num1=5
      let num2=10
      let suma=0, resta=0, multiplicacion=0, division=0, residuo=0 
      let ops="+", opr="-", opm="*", opd="/", opresi="%"
      suma=num1+num2
      resta=num1-num2
      multiplicacion=num1*num2
      division=num1/num2
      residuo=num1%num2
      console.log( "La Suma de",num1, ops, num2,"=",suma)
      console.log( "La Resta de",num1, opr, num2,"=",resta)
      console.log( "La Multiplicacion de",num1, opm, num2,"=",multiplicacion)
      console.log( "La Division de",num1, opd, num2,"=",division)
      console.log( "El residuo",num1, opresi, num2,"=",residuo)
    }
    //3) Presentar el mayor de dos numeros
    mayordedosnumeros(){
        console.log("3) Presentar el mayor de dos numeros")
     let num1=5
     let num2=10
     
     if (num1>num2){
        console.log(num1, "es mayor")
    }
        else{
            console.log(num2, "es mayor")
        }
     
    }



    //4) Dado un nombre presentarlo
    presentarnombre(){
        console.log("4) Dado un nombre presentarlo")
    let nombre= "aaron"
    console.log( nombre)
  }  
    //5)Dado un valor de compra presentar el total considerando un 12% de iva
    valorcompra(){
        console.log("5)Dado un valor de compra presentar el total considerando un 12% de iva")
    let valordecompra=100
    let iva=0.12
    let totalmasiva=0
    let total=0
    totalmasiva=valordecompra*iva
    total=valordecompra+totalmasiva
    console.log("El Total:",total)
  }  
  


    //6) Presentar 5 veces un nombre
    repetirunnombre(){
        console.log("6) Presentar 5 veces un nombre")
        let nombre= "ALEJANDRO "
        let c=1
        for(c=1;c<=5;c++){
            console.log(c,nombre)
        }
        
  }  
  
    //7) Presentar los numeros multiplos de 3 del 3 al 21
    multiplosde3(){
        console.log("7) Presentar los numeros multiplos de 3 del 3 al 21")
        let num=21
        let i=1
        while(i<=num){
            if(i%3==0){
             
             console.log(i)
            }
            i=i+1
        }
        
  }  
    //8) Presentar los numeros multiplos de 3 del 21 al 3
    multiplosde21a3(){
        console.log("8) Presentar los numeros multiplos de 3 del 21 al 3")
        let i=1
        for(i=21;i>1;i=i-3){
            console.log(i)
            
            }  
  }  
    //9) Dados dos nombres indicar si son iguales o diferentes
    nombresiguales(){
        console.log("9) Dados dos nombres indicar si son iguales o diferentes")
        let nombre1="AARON"
        let nombre2="MARIA"
        
        if(nombre1==nombre2){
            console.log("El nombre",nombre1,"y",nombre2,"son iguales")
            
        }else{
            console.log("El nombre",nombre1,"y",nombre2,"no son iguales")
        }
            }  
//10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
    arrcaracteresmenos5(){
        console.log("10)Presenta Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres")
        let arreglo=["435656","345434","12","123456","12","2","12","1","9","434355"]
        //               0        1     2     3       4    5   6    7   8    9       
        console.log(arreglo)
        for(let pos=0;pos<10;pos=pos+1){
          if (arreglo[pos].length < 5  ){ 
           console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
          }
        }

     }
    //11) Dado un arreglo presentar sus elementos
    elementosdearreglo(){
        console.log("11) Dado un arreglo presentar sus elementos")
        let arreglo=[20,30,45,12,6]
        console.log(arreglo)
    }

    //12) Dado un arreglo de numeros presentar los menores a 10
     arreglo33(){
        console.log("12)Dado un arreglo de numeros presentar los menores a 10")
        let num=[5,4,40,8,36]
        let long= num.length,c=0
        console.log("el arreglo es:",num)
        while (c < long){
            if (num[c]<10){
                console.log(num[c],"es menor que 10")
            }
           c=c+1 
        }
    
    }
    //13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares

    arreglo44(){
        console.log("13)Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let num=[5,4,40,8,36]
        let lon=num.length,c=0,suma=0
        console.log("el arreglo es:",num)
        while(c<lon){
            if (num[c] % 2 == 0){
                suma=suma+num[c]
                console.log("la suma de los pares es:",suma)
            }else{
           console.log(num[c],"es numero impar")
            }
            c=c+1
        }
    }
//14) Presentar el primero el medio y el ultimo valor de un arreglo
    arreglo55(){
        console.log("14)Presentar el primero el medio y el ultimo valor de un arreglo")
        let num=[5,4,40,8,36]
        let central = num[(num.length-1) /2]
        let ultimo =num[num.length-1]
        console.log("el arreglo es:",num)
    console.log("el primer numero del arreglo es:",num[0])
    console.log("el numero medio del arreglo es:",central)
    console.log("el ultimo numero del arreglo es:",ultimo)
    }
//15) Calcular el vuelto de un a compra dado el costo y el pago

    arreglo66(){
        console.log("15) Calcular el vuelto de un a compra dado el costo y el pago")
        let costo=25
        let pago = 30
        let vuelto=30-25
        console.log("el costo es:",costo)
        console.log("el pago es de:",pago)
        console.log("el vuelto es:",vuelto)
    }
//16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
    tablam1(){
        console.log("16)Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        console.log("la tabla del 5")
        let n=5
        let n1=1,mul=1
        while(n1<=12){
            mul=n*n1
            console.log(n,"*",n1,"=",mul)
            n1=n1+1
        }
        
    }
//17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
    sucesi1(){
        console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let n1= Math.floor(Math.random()*10)
        let n2= Math.floor(Math.random()*10)
        let ac=0,c=0
        while(c<n1){
            ac=ac+n2
            c=c+1
           console.log(n2,"+",ac-n2,"=",ac)
        }
        console.log("La multiplicacion por suma de",n1,"*",n2,"=",ac)
    }
//18)Realizar la division de dos numeros por medio de restas sucesivas

    ressuce1(){
        console.log("18)Realizar la division de dos numeros por medio de restas sucesivas")
        let n1=10,n2=2
        let c=0
         let res=n1
         while (res-n2>=0){
            res=res-n2
            console.log(res+n2,"-",n2,"=",res)
            c=c+1
         }
        console.log("la division entre:",n1,"/",n2,"=",c)
    }
//19)Calcular el factorial de un numero

    factorial1(){
        console.log("19)Calcular el factorial de un numero")
        let n=5
        let c=1,fac=1
        while(c<=n){
            fac=fac*c
            c=c+1
        }
        console.log("el factorial del numero 5 es:",fac)
    } 
//20)Calcular el exponente de un numero

    exponente1(){
        console.log("20)Calcular el exponente de un numero")
        let n=2,ex=3,po=0,c=1
        let elevado=Math.pow(n,ex)
        console.log(n,"^",ex,"=",elevado)
        
 }

//21)Calcular la serie de fibonacci dado un numero

    fibonacci1(){
        console.log("21)Calcular la serie de fibonacci dado un numero")
        let a=0,b=1,c=1,cont=3,n=8
        while (cont < n){
            a=b;b=c;c = a+b
            console.log(c)
            cont=cont +1
        }
    }
//22) Dado un numero invertirlo
numinvertido(){
    console.log("22) Dado un numero invertirlo")
    let num=321564
    let ninvertido=0,d=0
    console.log(num)
    while (num != 0){
        d=num%10
        ninvertido=ninvertido*10+d
        num=Math.trunc(num/10)
    }
    
    console.log(ninvertido)
}
//23) Presentar los divisores de un numero
divisordeunnumer(){
    console.log("23) Presentar los divisores de un numero")
    let num=8
    let divisores = []
    let c = 0
    for(c=1;c<num;c++){
        if(num%c==0){
            divisores.push(c)
        }

    }
    console.log(`Los divisores ${num} son: ${divisores}`)
    }

//24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
//divisores incluidos el 1 y excluido el propio numero dada igual al numero

numperfecto(){
         console.log("24)Presentar si un numero es perfecto o no")
        let divisores=0,num=6,i=0,sumaperf=0
        for(i=1;i<num;i=i+1){
            if(num % i == 0){
                console.log(i)
                sumaperf=sumaperf+i
            }
        }
        if(sumaperf==num){
            console.log(num,"Es un numero perfecto")
        }else{
            console.log(num,"Es un numero no perfecto")
        }
    }

//25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible 
//para 1 y el propio numero, es decir no tenga divisores)
                        //ejemplo: num=5
                     // respuesta=Es primo 
                     
     numprimo(){
        console.log("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores")
        let num=9
        let x=1,c=0
        
        while(x<=num){
            if(num%x==0){
                c=c+1
            }
            x=x+1
        }
        
        if(c==2){
           console.log(num,"Es primo")
        }
           else{
            console.log(num,"No es primo")
           }
        
    }
    
}

    

let tarea= new Conciclo()
tarea.sumadedosnumeros()
tarea.operaciones()
tarea.mayordedosnumeros()
tarea.presentarnombre() 
tarea.valorcompra()
tarea.repetirunnombre()
tarea.multiplosde3()
tarea.multiplosde21a3()
tarea.nombresiguales()
tarea.arrcaracteresmenos5()
tarea.elementosdearreglo()
tarea.arreglo33()
tarea.arreglo44()
tarea.arreglo55()
tarea.arreglo66()
tarea.tablam1()
tarea.sucesi1()
tarea.ressuce1()
tarea.factorial1()
tarea.exponente1()
tarea.fibonacci1()
tarea.numinvertido()
tarea.divisordeunnumer()
tarea.numperfecto()
tarea.numprimo()
