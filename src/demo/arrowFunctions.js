export function arrowFunctionDemo() {

    const callMe = (fname, lname) => {
        console.log("name is " + fname + " " + lname);
    }

    callMe("john","doe"); 

    const grade = (g) => {
        console.log("grade is "+g); 
    }

    grade(9);
}