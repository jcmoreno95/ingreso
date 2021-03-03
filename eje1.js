function mostrar()
{

	var nombreproducto;
	var tipoproducto;
	var precioproducto;
	var precioproductopar;
	var qproductos;
	var qproductospar;
	var tipoinflamable;
	var marca;
	var contadoralcohol=0;
	var contadoriac=0;
	var contadorquat=0;
	var contadorproductos=0;
	var contadorignifugo=0;
	var contadorexposivo=0;
	var contadorcombustible=0;
	var contadoriacbaratos=0;
	var tipomascaro;
	var marcamascara;
	var flagprimerproducto;
	var preciomascaro;
	var promedioalcohol;
	var promedioiac;
	var promedioquat;
	var inflamablemascantidad;
	var contadorqalcohol=0;
	var contadorqiac=0;
	var contadorqquat=0;

   for(i=0;i<5;i++){

	     nombreproducto = prompt("Ingrese Nombre producto");
	
	    do{
		      tipoproducto = prompt("Introduzca  tipo de producto valido (ALCOHOL, IAC o QUAT)");}
	    while(tipoproducto != "ALCOHOL" && tipoproducto != "IAC" && tipoproducto !="QUAT");

        do{
			precioproducto = prompt("Ingrese precio valido");
			precioproductopar=parseInt(precioproducto);}
		
        while(precioproductopar<100 || precioproductopar>300 );

		do{
			qproductos = prompt("Ingrese cantidad valida (hasta 1000)");
			qproductospar =parseInt(qproductos);}
		
        while(precioproductopar>1000 || precioproductopar<0 );

		do{
			tipoinflamable = prompt("Introduzca  tipo de inflamable valido (ignifugo, combustible o explosivo)");}
	  while(tipoinflamable != "ignifugo" && tipoinflamable != "combustible" && tipoinflamable !="explosivo");

	   marca=prompt("ingrese la marca");

	    switch(tipoproducto){
		 case "ALCOHOL":
			contadoraqlcohol=contadorqalcohol+qproductospar;
			contadoralcohol++;
			break;
		
		 case "IAC": 
		    contadorqiac=contadorqiac+qproductospar;
			contadoriac++;
			break;

		 case "QUAT":
			contadorqquat=contadorqquat+qproductospar;
			contadorquat++;
			break;
		}
	
	  contadorproductos++;
	
	  switch(tipoinflamable){
		 case "ignifugo":
		   contadorignifugo=contadorignifugo+qproductospar;
		   break;
	   
		 case "combustible": 
		   contadorcombustible=contadorcombustible+qproductospar;
		   break;

		 case "explosivo":
		   contadorexposivo=contadorexposivo+qproductospar;
		    break;
	    }
	
	 if(tipoproducto=="IAC" && precioproductopar>=200){
		 contadoriacbaratos++;
	  }  
	
     if(flagprimerproducto===0){
		 tipomascaro=tipoproducto;
		 marcamascara=marca;
		 flagprimerproducto=1;
		 preciomascaro=precioproductopar;
	    }
	 else {  
		    if(preciomascaro<precioproductopar){
				preciomascaro=precioproductopar;
				tipomascaro=tipoproducto;
		        marcamascara=marca;
			}
	    }   
	 }
     
	 promedioalcohol=contadorqalcohol/contadoralcohol;
	 promedioiac=contadorqiac/contadoriac;
	 promedioquat=contadorqquat/contadorquat;

	if(contadorignifugo>contadoralcohol && contadorignifugo>contadorexposivo){inflamablemascantidad="ignifugo";}
	if(contadorexposivo>contadorcombustible && contadorexposivo>contadorignifugo){inflamablemascantidad="explosivo";}
	if(contadorcombustible>contadorignifugo && contadorcombustible>contadorexposivo){inflamablemascantidad="combustible";}



	document.write("El promedio de Q de alcoholes es "+ promedioalcohol + ". El promedio Q de IAC es "+ promedioiac + ". El promedio Q de Quat es " + promedioquat +  ". El tipo de inflamable con mas Q  es "+ inflamablemascantidad + ". La cantidad de unidades IAC con precios menores a 200 es "+ contadoriacbaratos + ". La marca y tipo del producto mas caro es " + marcamascara + tipomascaro+".")


	}
