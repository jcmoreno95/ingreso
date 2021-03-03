function mostrar()
{
  var nombre;
  var cursada;
  var qmaterias;
  var sexo;
  var nota;
  var edad;
  var qmateriaspar;
  var confirmacion;
  var edadpar;
  var respuesta="si";
  var flagprimeralumnoprom=0;
  var mejorpromedio;
  var nombrepromediomasalta;
  var edadmasjoven;
  var flagprimeralumnojoven;
  var nombreedadmasjoven;
  var contadorfemenino;
  var contadormasculino;
  var contadornobinario;
  var qfemenino;
  var qmasculino;
  var qnobinario;
  var flagprimercursamat;
  var edadcursamat;
  var nombrecursamayormaterias;
  var qmateriasmayor;
 

  do{ 
    
     nombre = prompt("Ingrese Nombre");

     do{
      cursada = prompt("Introduzca  tipo de cursada valido (libre, presencial o remota)");}
     while(cursada != "libre" &&  cursada != "presencial" && cursada !="remota");

     do{
      sexo = prompt("Introduzca  sexo  valido (femenino, masculino o no binario)");}
     while( sexo != "femenino" &&  sexo != "masculino" && sexo !="no binario");

     do{
			qmaterias = prompt("Ingrese cantidad de materias");
			qmaterias=parseInt(qmateriaspar);
      }
		  while(qmateriaspar<0 || qmateriaspar>8);

      do{
			nota = prompt("Ingrese nota promedio");
			notapar=parseInt(nota);
      }
		  while(notapar<0 || qmateriaspar>10);

      do{
       edad= prompt("Introduzca edad");
       edadpar = parseInt(edad);
       confirmacion = isNaN(edadpar);}
      while(confirmacion===true);

     
      if(flagprimeralumnoprom==0 && sexo!=="masculino"){  
        mejorpromedio=notapar;
        nombrepromediomasalta=nombre;
        flagprimeralumnoprom=1
      }
      
      if(flagprimeralumnoprom===1 && sexo!="masculino" && notapar>mejorpromedio) {  
        mejorpromedio=notapar;
        nombrepromediomasalta=nombre;
      }
      
      if(flagprimeralumnojoven===0 && cursada=="libre"){  
        edadmasjoven=edadpar;
        nombreedadmasjoven=nombre;
        flagprimeralumnojoven=1
      }
      
      if(flagprimeralumnojoven==1 && cursada=="libre" && edadpar<edadmasjoven){  
        edadmasjoven=edadpar;
        nombreedadmasjoven=nombre;
        flagprimeralumnojoven=1
      }

      switch(sexo){
        case "femenino":
          contadorfemenino=contadorfemenino+notapar;
          qfemenino++;
          break;
        
        case "masculino": 
          contadormasculino=contadormasculino+notapar;
          qmasculino++;
          break;
   
        case "no binario":
          contadornobinario=contadornobinario+notapar;
          qnobinario++;
           break;
      }
     
      if(flagprimercursamat===0 && cursada!=="remota"){  
        edadcursamat=edadpar;
        nombrecursamayormaterias=nombre;
        qmateriasmayor=qmateriaspar;
        flagprimercursamat=1
      }

      if(flagprimercursamat==1 && cursada!="remota" && qmateriasmayor<qmateriaspar){  
        edadcursamat=edadpar;
        nombrecursamayormaterias=nombre;
        qmateriasmayor=qmateriaspar;
      }
      respuesta=prompt("Queres ingresar otro dato?(si/no)")


  }
  while(respuesta=="si");

  promediomasculino=contadormasculino/qmasculino;
  promediofemenino=contadorfemenino/qfemenino;
  promedionobinario=contadornobinario/qnobinario;
   
   
   
   
 document.write("El  mejor promedio nomasculino es "+ nombrepromediomasalta + ". El alumno mas joven que rinde libre es "+ nombreedadmasjoven + ". El promedio de los masculinos es " + promediomasculino + + ". El promedio de los femenino es " + promediofemenino +  ". El promedio de los nobinario es " + promedionobinario+ ". La edad del que cursa mas materias de forma no remota es "+ edadcursamat+ "y su nombre es "+nombrecursamayormaterias+".")
   


}
