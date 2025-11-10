//JavaScript try-catch-finally
//Example 01
//Case 01
const data = '{"name":"Sahin","age":25, "isStudent": true}';
const results = JSON.parse(data);
console.log(results);


//Case 02
try{
    const data = "Sahin";
    const results = JSON.parse(data);
    console.log(results);
} catch(error){
    console.log('Error handling graceful.')
} finally {
    console.log("JSON parsing attend completed.")
}


//Example 02
try {
    console.log("Opening the file...");
} catch{
    console.error("Error:", error.message);
} finally {
    console.log('Closing the file...');
};



//Example 03
function getProperty(str){
  try{
    return str.toUpperCase();
  } catch(error){
    console.error('Error eaten by virus 😀');
  }
}

console.log(getProperty("Hi, My name is Sahin"));
console.log(getProperty());


//Example 04
function perfoCleanUp(){
  try{
    console.log("Starting a process...");
  } finally{
    console.log("Cleaning up resources...");
  };
};

perfoCleanUp();


//Example 05
function validateInput(input){  
  try {  
    if (typeof input !== 'string') {  
      throw new Error('Input must be a string.');  
    }  
    console.log('Valid input:', input);  
  } catch (error) {  
    console.error("Custom error:", error.message);  
  } finally {  
    console.log("Validation complete.");  
  }  
}  

validateInput("Hello");  
validateInput(42);