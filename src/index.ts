// import "./datatype/DateType";
// import "./datatype/NumberType";
// import "./datatype/ObjectType";


import "../src/typings/Number";
import "../src/typings/Date";
import "../src/typings/Object";

import "../src/typings/*";



// export { dateFormatPrototypeInit } from "./datatype/DateType";
// export { objectPrototypeInit } from "./datatype/ObjectType";

import { dateFormatPrototypeInit } from "./datatype/DateType";
import { objectPrototypeInit } from "./datatype/ObjectType";
import { numberPrototypeInit } from "./datatype/NumberType";

// declare namespace _default {
//     export { install };
// }
// export default _default;
// export function install(app: any): void{

// }


function install() {
    dateFormatPrototypeInit();
    numberPrototypeInit();
    objectPrototypeInit();
}

export default install;