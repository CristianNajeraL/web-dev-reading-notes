// Using let keyword instead of var

let index: number = 0;

if (index == 0) {
    let index: number = 2;
    console.log(`Index = ${index}`);
}

console.log(`Index = ${index}`);

// Defining arguments with data types

function printObject(obj: string | number) {
    console.log(`Obj = ${obj}`);
}

printObject(1);
printObject("one");

// Using type alias and type guards

type StringOrNumber = string | number;

function addWithTypeGuard(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    if (typeof arg1 === 'string') {
        console.log("Arg1 is a string");
        return arg1 + arg2.toString();
    }
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        console.log("Arg1 and Arg2 are numbers");
        return arg1 + arg2;
    }
    console.log("Arg1 and Arg2 are casted as string");
    return arg1.toString() + arg2.toString();
}

console.log(addWithTypeGuard(1,2));
console.log(addWithTypeGuard(1,"2"));
console.log(addWithTypeGuard("1","2"));
console.log(addWithTypeGuard("1",2));

// Using enums
// It works like a Python Set
// You can define the value of each element in the enums just element=number
// The value related to the element could be a string too

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`Enum value is: ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log("Door is open");
            break;
        case DoorState.Closed:
            console.log("Door is closed");
            break;
    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum DoorStateSpecificValues {
    Open = 123,
    Closed = 321
}

console.log(`Open door value is ${DoorStateSpecificValues.Open}`);

enum DoorStateString {
    Open = "Open",
    Closed = "Closed"
}

console.log(`Door is ${DoorStateString.Open}`);

// Using const enum makes the compiled code more efficient

const enum DoorStateConst {
    Open = 123,
    Closed = 321
}

console.log(`Open door const value is ${DoorStateConst.Open}`);
console.log(`Closed door const value is ${DoorStateConst.Closed}`);

// Undefined data type
// Variable is not defined in the current scope
let array = ['123', '456', '789'];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}
function checkElement(element: string | undefined) {
    if (element === undefined)
        console.log("Invalid element");
    else
        console.log(`Valid element: ${element}`);
}
for (let i = 0; i < array.length; i++) {
    checkElement(array[i]);
}

// Null data type
// Variable is defined, but it does not have a value
function printValues(value: number | null) {
    if (value === null)
        console.log("Not value related");
    else
        console.log(value);
}
printValues(1);
printValues(null);

// Conditional expressions
const value: number = 10;
const message: string = value > 10?
    "Larger than 10" : "Equal or lower than 10";
console.log(message);

// Optional chaining
let objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};

function printNestedObject(obj: any) {
    if (
        obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name
    ) {
        console.log(`Name = ${obj.nestedProperty.name}`);
    } else {
        console.log("Name was not found or undefined");
    }
}
printNestedObject(objectA);
printNestedObject({});

// ? is going to return undefined if any of the properties is
//  either null or undefined

function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`Name = ${obj.nestedProperty.name}`);
    } else {
        console.log("Name was not found or undefined");
    }
}
printNestedOptionalChain(objectA);
printNestedOptionalChain(undefined);
printNestedOptionalChain({property: "Some text"});
printNestedOptionalChain({nestedProperty: {name: null}});
printNestedOptionalChain({nestedProperty: {other_name: null}});
printNestedOptionalChain({nestedProperty: {name: "Cristian"}});

//  Nullish coalescing
function nullishCheck(value: number | undefined | null) {
    console.log(`a : ${value ?? `No value was found`}`)
}
nullishCheck(1);
nullishCheck(null);

function testNullOperands(value_x: number, value_y: number | null | undefined) {
    let addResult: number = value_x + (value_y ?? 0);
    console.log(addResult);
}
testNullOperands(1, null);

let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "anObject"
    }
}
function printObjectType(obj: object) {
    console.log(`Obj: ${JSON.stringify(obj)}`);
}
printObjectType(structuredObject);
