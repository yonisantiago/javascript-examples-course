//Square code
console.group('Square');
// const squareSide = 5;
// console.log("Square side measure: " + squareSide + " cm");

function perimeterSquare(squareSide){
return squareSide * 4;

}
// console.log("Square perimeter: " + perimeterSquare + " cm");

// const squareArea = squareSide * squareSide;
function squareArea(squareSide){
return squareSide * squareSide;
}
// console.log("Square area: " + squareArea + " cm^2");
console.groupEnd();


//Triangle code
console.group('Triangle');


// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 9;
// //calculate height of triangle
// const triangleHeight = Math.sqrt(Math.pow(triangleBase, 2) - Math.pow(triangleSide1, 2));

//console.log("triangle side measures: " +  triangleSide1 + " cm, " + triangleSide2 + " cm, " + triangleBase + " cm");

function trianglePerimeter(triangleSide1, triangleSide2, triangleBase) {
    return Number(triangleSide1 + triangleSide2 + triangleBase);
}
// console.log("Triangle perimeter: " + trianglePerimeter + " cm");
//calculate area of triangle
function triangleArea(triangleBase, triangleHeight) {
    return (triangleBase * triangleHeight) / 2;
} 
// console.log("Square area: " + squareArea + " cm^2");
console.groupEnd();

//Circle code
console.group('Circle');

//Radius of circle
// const circleRadius = 5;
// console.log("Circle radius: " + circleRadius + " cm");
//Diameter of circle
function circleDiameter(circleRadius){
    return circleRadius * 2;}
// console.log("Circle diameter: " + circleDiameter + " cm");
//PI
const pi = Math.PI;
// console.log("PI: " + pi);
//Circle perimeter
function circlePerimeter(circleRadius) {
    const diameter = circleDiameter(circleRadius);
    return diameter * pi;
}
// console.log("Circle perimeter: " + circlePerimeter + " cm");
//Circle area
function circleArea(circleRadius) {
   return pi * Math.pow(circleRadius, 2);
} 
// console.log("Circle area: " + circleArea + " cm^2");
console.groupEnd();

// calculate Triangle Isoceles Height
function triangleIsocelesHeight(triangleBase, triangleSide1, triangleSide2) {

    if(triangleSide1 === triangleSide2) {
        return Math.sqrt(Math.pow(triangleSide1, 2) - Math.pow(triangleBase*0.5, 2) );
    } else {
        return "Sides must be equal to calculate height of an isoceles triangle"
    }
    
}

//Here we interact with HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("SquareSide");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const input = document.getElementById("SquareSide");
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}
//triangle


function calculateTriangleIsocelesHeight() {
    const inputBase = document.getElementById("TriangleBase").value;
    const inputSide1 = document.getElementById("Side1").value;
    const inputSide2 = document.getElementById("Side2").value;

    const height = triangleIsocelesHeight(inputBase, inputSide1, inputSide2);
    alert(height);

}

function calculateTrianglePerimeter(){
    const inputBase = Number(document.getElementById("TriangleBase").value);
    const inputSide1 = Number(document.getElementById("Side1").value);
    const inputSide2 = Number(document.getElementById("Side2").value);


    const perimeter = trianglePerimeter(inputSide1, inputSide2, inputBase);
    alert(perimeter);
 
}

function calculateTriangleArea(){
    const inputBase = Number(document.getElementById("TriangleBase").value);
   const height = Number(document.getElementById("TriangleHeight").value);

    const area = triangleArea(inputBase, height);
    alert(area);
}
   
//circle
function calculateCirclePerimeter(){
    const input = Number(document.getElementById("CircleRadius").value);
   

    const perimeter = circlePerimeter(input);
    alert(perimeter);
}

function calculateCircleArea(){
    const input = Number(document.getElementById("CircleRadius").value);
   

    const area = circleArea(input);
    alert(area);
}