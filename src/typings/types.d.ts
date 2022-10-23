import './Date'
import './Number'
import './Object'


// export { bundle } from "../../dist/bundle";
// export declare const xxx: () => void;
// declare const _default: {
//     dateFormatPrototypeInit: () => void;
// };
// export default _default;


export { bundle } from "../../dist/bundle";
export { dateFormatPrototypeInit } from "../../dist/datatype/DateType";
export { objectPrototypeInit } from "../../dist/datatype/ObjectType";
export { numberPrototypeInit } from "../../dist/datatype/NumberType";
export declare const xxx: () => void;
declare const _default: {
    dateFormatPrototypeInit: () => void;
};
export default _default;

