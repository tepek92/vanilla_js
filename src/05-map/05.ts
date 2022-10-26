import {student, StudentType} from "../02-object/02";

export const arrStudents = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 89,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

export const myMap = (arr: any, callback: Function) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
};
