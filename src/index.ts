import '../src/typings/types'


import { dateFormatPrototypeInit } from "./datatype/DateType";
import { objectPrototypeInit } from "./datatype/ObjectType";
import { numberPrototypeInit } from "./datatype/NumberType";

function install() {
    dateFormatPrototypeInit();
    numberPrototypeInit();
    objectPrototypeInit();
}

export default install;