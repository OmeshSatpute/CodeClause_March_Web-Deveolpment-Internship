var input = document.getElementById('input');
var result = document.getElementById('result');
var inputype = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


inputTypeValue = inputTpye.Value;
inputTypeValue = resultTpye.Value;



function myResult(){
    //result.value = input.value;

    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;

    if(inputTypeValue ==="meter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter"){
        result.value = Number(input.value) * 100;     
    }else if (inputTypeValue ==="meter" && resultTypeValue==="Foot") {
        result.value = Number(input.value) * 3.28084;
    }else if (inputTypeValue ==="meter" && resultTypeValue==="meter") {
        result.value=input.value;
    }

    if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
        result.value = input.value;
    }else if(inputTypeValue ==="kilometer" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter"){
        result.value = Number(input.value) * 100000;     
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="Foot"){
        result.value = Number(input.value) * 3280.84;
    } 



    if(inputTypeValue ==="Centimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.01;     
    }else if (inputTypeValue ==="Centimeter" && resultTypeValue==="Foot") {
        result.value = Number(input.value) * 0.0328;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
        result.value = input.value
    }
    

    if(inputTypeValue ==="Foot" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.000305;
    }else if(inputTypeValue ==="Foot" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.3048;
    }else if (inputTypeValue ==="Foot" && resultTypeValue==="Centimeter") {
        result.value = Number(input.value) * 30.48;
    }else if (inputTypeValue ==="Foot" && resultTypeValue==="Foot") {
        result.value = input.value
    }

}

