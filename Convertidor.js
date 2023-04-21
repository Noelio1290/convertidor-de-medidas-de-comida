const stringConverter = ( portionFood ) => {

  const tbsp = 15;
  const tsp = 5;
  let numberInString = null
  let fractionInString = null
  let totalGrams = null
  let numerador = null
  let denominador = null

  // Find integer in string
  const findIntegerInString = /\d+(\.\d+)?/;
  const numberOfSrtring = portionFood.match(findIntegerInString);
  if(numberOfSrtring){
    numberInString = numberOfSrtring[0];
    totalGrams = numberInString * tbsp
  }

  // Find fraction in string
  const findFractionInString = /(\d+)\/(\d+)/;
  const fractionOfString = portionFood.match(findFractionInString);
  if(fractionOfString){
    numerador = fractionOfString[1]
    denominador = fractionOfString[2]
    fractionInString = numerador / denominador ;
    totalGrams = Math.ceil(fractionInString * tbsp)
  }

  //find tbsp in string
  const lookingForWordTbsp =  portionFood.indexOf("tbsp")
  const lookingForWordTsp =  portionFood.indexOf("tsp")
 
  if (lookingForWordTbsp >= 0) {
    // remplaza "tbsp" por 'tbsp ${tbsp}g)'
    let currentportionFood = portionFood.slice(0, lookingForWordTbsp) + `tbsp ${totalGrams}g` + portionFood.slice(lookingForWordTbsp + 4);
    console.log(currentportionFood)
  }else if(lookingForWordTsp >= 0){
    // remplaza "tsp" por 'tsp ${tbsp}g)'
    let currentportionFood = portionFood.slice(0, lookingForWordTbsp) + `tsp ${totalGrams}g` + portionFood.slice(lookingForWordTbsp + 4);
    console.log(currentportionFood)
  }
};

stringConverter("2 tbsp of butter")
stringConverter("1/2 tbsp of oregane")
