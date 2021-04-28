
const readline= require("readline");

const r=readline.createInterface({input:process.stdin,output:process.stdout});
r.question("What is your gender?(M/F)",function(g){
r.question("What is your height in cms?",function(height){
    r.question("what is your weight in kgs?",function(weight) 
    {
        if(height>0 && weight>0)
        {
        
        
const BMI=((weight/((height*height)/(100*100))));
console.log(BMI);


if(BMI<=18.4 && BMI<=24.9)
{

console.log("malnutrition risk");  
} 
else if((BMI>=25 && BMI<=29.9))
{
    console.log("Low risk");  
    
}
else if((BMI>=30 && BMI<=34.9))
{
    console.log("Medium risk"); 
    
}
else if((BMI>=35 && BMI<=39.9))
{
    console.log("High risk");  
    
}
else if(BMI>=40)
{
    console.log("Very High risk");  
    
}}
else{
    console.log("Please enter the values")
}

r.close();
});
});
});