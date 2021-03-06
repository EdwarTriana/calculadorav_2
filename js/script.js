function calculateResult(){
    const  result = document.getElementById("result").innerHTML
    return result
    

    
}
function resultado(value){
    document.getElementById("result").innerHTML=value
    
}
function place(key){
    let result = calculateResult()
    if (result != "0" || isNaN(key)){
        console.log(isNaN(key)) 
        resultado(result + key)
    } else {
        resultado(key)
    }
 
    
}
function calcular(){
    let result = eval(calculateResult())
        resultado(result)
        if(place === "0"){
            result = (place / document.getElementById("numero0").innerHTML )
          }else if(result === Infinity){//se compara result si es similar a Infinity
            alert("No puedes dividir por cero")
          }
      }
function borrar(key){
    resultado(0)
}

