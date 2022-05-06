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

//  Never type
const enum AnEnum {
    First,
    Second
}
function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.First: return "First Case";
        case AnEnum.Second: return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue
}
console.log(getEnumValue(AnEnum.First));
console.log(getEnumValue(AnEnum.Second));

//  Tuples
//  Almost the same as Python, [] instead of ()
//  ? could be used to mark an element as optional
let tuple1: [string, boolean];
let tuple2: [string, boolean?];
tuple1 = ['Test', true];
tuple2 = ['Test'];
let [tuple1_string, tuple1_boolean] = tuple1;
console.log(`tuple1[0] = ${tuple1[0]}, tuple1[1] = ${tuple1[1]}`);
console.log(`tuple2[0] = ${tuple2[0]}, tuple2[1] = ${tuple2[1]}`);
console.log(`tuple1[0] = ${tuple1_string}, tuple1[1] = ${tuple1_boolean}`);

//  Object destructing

let complexObject: {
    aNum: number,
    bStr: string,
    cBool: boolean
} = {
    aNum: 1,
    bStr: 'string',
    cBool: true
}

let objId: number, objName: string, isValid: boolean;
({aNum: objId, bStr: objName, cBool: isValid} = complexObject);

console.log(objId);
console.log(objName);
console.log(isValid);


//  Functions
//  Optional parameters
function concatValues(value_x: string, value_y?: string) {
    console.log(value_x + value_y);
}
concatValues('hello', 'World');
concatValues('hello');

//  Rest Arguments
function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments('1', '2');
testArguments(3, 4);

//  Callback
let myCallback = function (text) {
    console.log("myCallback called with " + text);
};

function withCallbackArg(message, callbackFn) {
    console.log("withCallback called, message: " + message);
    callbackFn(message + " from withCallback");
}
withCallbackArg("Initial text", myCallback);

//  Callback with signatures
//  fat arrow syntax () =>
function myCallback_(text:string): void {
    console.log(`myCallback_ called with ${text}`);
}
function withCallbackArg_(
    message: string,
    callbackFn: (text: string) => void
): void {
    console.log("withCallbackArg_ called, message: " + message);
    callbackFn(message + " from withCallback_");
}
withCallbackArg_("Initial text", myCallback_);

//  Literals
//  It works as an enum
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;
function withLiteral(
    input: AllowedStringValues | AllowedNumericValues
): void {
    console.log(`Called with: ${input}`);
}
withLiteral("one");
withLiteral(1);
