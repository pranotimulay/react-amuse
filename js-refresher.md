# JavaScript Refresher

## `defer` Attribute 
Defers the loading of scripts until after the entire HTML is loaded.

## `type=module` Attribute
Unlocks the import syntax to use functions exported by another script.

## React Build Process
- No script tags in index.html?
- `<noscript></noscript>` fallback tag.

Code written is transformed before handing off to the browser.
React-scripts library - before injected into the browser for packaging and tooling.
Raw unprocessed React code won't execute in the browser - JSX feature.
NodeJS is being used behind the scenes for these underlying build tools.
Export default variable with a value - only one default export per file.

## Variables, Values, Functions, etc.

### Array Destructure
```javascript
const [fname, lname] = ["Pranoti", "Mulay"];


## Variables, Values, Functions, etc.

### Array Destructure
```javascript
const [fname, lname] = ["Pranoti", "Mulay"];
```

## For Object
Values are pulled based on names.
## For Array
Values are pulled based on index.

## Pasing Function as Value
```javascript
function innerFunction() {
    console.log("inner");
}

myFunction(innerFunction); // Gets passed as a value that can be used later in myFunction.
myFunction(innerFunction()); // Gets executed immediately and the result is passed to the function as a parameter.
```