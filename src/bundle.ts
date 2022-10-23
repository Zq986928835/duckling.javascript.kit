import { dateFormatPrototypeInit } from "./datatype/DateType";
import { objectPrototypeInit } from "./datatype/ObjectType";
import { numberPrototypeInit } from "./datatype/NumberType";

export const bundle = function () {
    dateFormatPrototypeInit();
    numberPrototypeInit();
    objectPrototypeInit();
}