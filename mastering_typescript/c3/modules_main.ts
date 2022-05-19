import { Module1 as MyMod1 } from "./modules/Module1";
import * as MultipleExports from "./modules/MultipleExports";
import DefaultAdd from "./modules/DefaultExport";
let modDefault = DefaultAdd(1, 2);
let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();
let mod1 = new MyMod1();
mod1.print();
console.log(modDefault);

//  Horrible way to import a module

// import { MultipleClass1, MultipleClass2 }
//     from "./modules/MultipleExports";
// let mc1 = new MultipleClass1();
// let mc2 = new MultipleClass2();