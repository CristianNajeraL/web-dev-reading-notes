//  Interfaces
//  With optional properties
interface IIdName {
    id: number;
    name?: string;
}
let idObject1: IIdName = {
    id: 2
}
let idObject2: IIdName = {
    id: 2,
    name: "This is the name"
}

//  In operator
interface IDescrValue {
    descr: string;
    value: number;
}
function printNameOrValue(obj: IIdName|IDescrValue): void {
    if ('id' in obj) {
        console.log(`obj.name: ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.value: ${obj.value}`);
    }
}
printNameOrValue(
    {
        id: 1,
        name: "Object name"
    }
);
printNameOrValue(
    {
        value: 2,
        descr: "Object description"
    }
);

//  keyof
interface IPerson {
    id: number;
    name: string;
}
type PersonPropertyName = keyof IPerson;
function getProperty(key: PersonPropertyName, value: IPerson): void {
    console.log(`${key} = ${value[key]}`);
}
let person1: IPerson = {
    id: 1,
    name: "Cristian"
}
getProperty("id", person1);
getProperty("name", person1);

//  Classes
class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
interface IPrint {
    print(): void;
}
function printClass(a: IPrint) {
    a.print();
}
class ClassA implements IPrint {
    print(): void {
        console.log(`ClassA.print() called.`)
    };
}
class ClassB {
    print(): void {
        console.log(`ClassB.print() called.`)
    };
}
let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);

//  Class constructor
class ClassWithConstructor {
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

//  Classes modifiers
class ClassWithPublicProperty {
    public id: number | undefined;
}
let classWithPublic = new ClassWithPublicProperty();
classWithPublic.id = 10;
class ClassWithPrivateProperty {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}
let classWithPrivate = new ClassWithPrivateProperty(1);
class ClassWithReadOnly {
    readonly name: string;
    constructor(_name: string) {
        this.name = _name;
    }
    // setNameValue(_name: string) {
    //     this.name = _name;
    // }
}

//  Accessors
class ClassWithAccessors {
    private _id: number = 0;
    get id(): number {
        console.log(`get id property`);
        return this._id;
    }
    set id(value: number) {
        console.log(`set id property`);
        this._id = value;
    }
}
let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

//  Static functions
class StaticFunction {
    static printTwo() {
        console.log(`2`);
    }
}
StaticFunction.printTwo();

//  Static properties
class StaticProperty {
    static count: number = 0;
    updateCount(): void {
        StaticProperty.count++;
    }
}
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();

firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

//  Namespaces
namespace FirstNameSpace {
    export class NameSpaceClass {}
    class NotExported {}
}
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported()

//  Interface inheritance
interface IBase {
    id: number | string;
}
interface IDescription {
    descr: string;
}
interface IDerivedFromBase extends IBase, IDescription {
    id: number;
    name: string;
}
let multipleInterfaces: IDerivedFromBase = {
    id: 1,
    name: "Cristian",
    descr: "Najera"
};
console.log(multipleInterfaces);

//  Class inheritance
class BaseClass implements IBase {
    id: number = 0;
}
class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string = "nameString";
    descr: string = "descString";
}

//  The super function
class BaseClassWithCtor {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
    private name: string;
    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }
}

//  Function overriding
class BaseClassWithFn {
    print(text: string) {
        console.log(`BaseClassWithFn: ${text}`)
    }
}
class DerivedClassWithOverride extends BaseClassWithFn {
    print(text: string) {
        console.log(`DerivedClassWithOverride: ${text}`)
    }
}
class DerivedClassWithSuper extends BaseClassWithFn {
    print(text: string) {
        super.print(`DerivedClassWithSuper: ${text}`)
    }
}
let derivedClassFnOverride = new DerivedClassWithOverride();
let derivedClassFnWithSuper = new DerivedClassWithSuper();
derivedClassFnOverride.print("test");
derivedClassFnWithSuper.print("test");

//  Protected
//  Same behaviour as private, can be access just from the base class
class BaseClassProtected {
    protected id: number;
    private name: string = "";
    constructor(id: number) {
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id: number) {
        super(id);
        console.log(`base.id = ${this.id}`)
        // console.log(`base.name = ${this.name}`)
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = "test";

//  Abstract class
abstract class EmployeeBase {
    public id: number;
    public name: string;
    abstract doWork(): void;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}
class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill")
let jackManager = new OfficeManager(3, "Jack");
jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();

//  instanceof
class A {}
console.log(`new A() instanceof A: ${new A() instanceof A}`);
console.log(`new OfficeWorker() instance of A: ${new OfficeWorker(1, "Joe") instanceof A}`);