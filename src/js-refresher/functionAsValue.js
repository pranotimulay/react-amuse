export function testerFunction () {
    console.log("tester function called ...");
    
    console.log("function without execution"+ printGrade(printName));
    

    console.log("function with execution" + printCourse(printName())); // will print undefined since the function does not return anything 

}

function printCourse(nameFunctionValue) {
    console.log(nameFunctionValue + " OK");
}

function printGrade(nameFunction) {
    nameFunction();
    console.log("grade 9");
}

function printName() {
    console.log("john doe");
}



