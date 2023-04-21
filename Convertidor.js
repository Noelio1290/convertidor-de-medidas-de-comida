const convertRecipe = ( recipe ) => {
  //find tbsp and tsp in string
  const lookingForWordTbsp =  recipe.indexOf("tbsp")
  const lookingForWordTsp =  recipe.indexOf("tsp")

  const tbsp = 15;
  const tsp = 5;
  let numberInString = null
  let fractionInString = null
  let totalGrams = null
  let numerador = null
  let denominador = null
  let finalString = ""
  // Find integer in string
  const findIntegerInString = /\d+(\.\d+)?/;
  const numberOfSrtring = recipe.match(findIntegerInString);
  if(numberOfSrtring){
    numberInString = numberOfSrtring[0];
    totalGrams = (numberInString * (lookingForWordTbsp >0 ? tbsp : tsp))
  }

  // Find fraction in string
  const findFractionInString = /(\d+)\/(\d+)/;
  const fractionOfString = recipe.match(findFractionInString);
  if(fractionOfString){
    numerador = fractionOfString[1]
    denominador = fractionOfString[2]
    fractionInString = numerador / denominador ;
    totalGrams = Math.ceil((fractionInString * (lookingForWordTbsp >0 ? tbsp : tsp)))
  }
 
  if (lookingForWordTbsp >= 0) {
    // remplaza "tbsp" por 'tbsp ${tbsp}g)'
    finalString = recipe.slice(0, lookingForWordTbsp) + `tbsp ${totalGrams}g` + recipe.slice(lookingForWordTbsp + 4);
    console.log(finalString)
  }else if(lookingForWordTsp >= 0){
    // remplaza "tsp" por 'tsp ${tbsp}g)'
    finalString = recipe.slice(0, lookingForWordTsp) + `tsp ${totalGrams}g` + recipe.slice(lookingForWordTsp + 3);
    console.log(finalString)
  }
  return finalString
};

convertRecipe("2 tbsp of butter")
convertRecipe("2 tsp of salt")
convertRecipe("1/2 tbsp of oregane")
convertRecipe("1/2 tsp of salt")
