// export const deep_copy = (object: any): any => {
//     if (object === null) return null;
//
//     let copy;
//     if (Array.isArray(object)) {
//         copy = object.map(el => typeof el === "object" ? deep_copy(el) : el);
//     } else if (typeof object === "object") {
//         copy = {...object};
//         for (let key in object) {
//             if (typeof object[key] === "object")
//                 copy[key] = deep_copy(object[key]);
//         }
//     } else {
//         return object;
//     }
//     return copy;
// }
export const deep_copy = (object: any): any => {
    if (object === null) return null;
    const copy = Array.isArray(object) ? [...object] : {...object};
    for (const [key, value] of Object.entries(object)) {
        copy[key] = typeof value === "object" ? deep_copy(value) : value;
    }
    return copy;
}
