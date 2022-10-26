import {mult, splitIntoWords, sum} from "./01";

// Переменные, которые используются в разных тестах.
let a: number;
let b: number;
let c: number;

// Для защиты от затирания перменных в одном из тестов.
// Фун-ия вызывается перед каждым текстом и возвращает значения до первоначальных.
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})
//
// test('sum a + b correct', () => {
//     a = 100;
//     // action
//     const result1 = sum(a, b);
//     const result2 = sum(b, c);
//
//     // expected result
//     expect(result1).toBe(102);
//     expect(result2).toBe(5);
// });
//
// test('mult a * b correct', () => {
//     // action
//     const result1 = mult(a, b);
//     const result2 = mult(b, c);
//
//     // expected result
//     expect(result1).toBe(2);
//     expect(result2).toBe(6);
// });
//
// test('split string correct', () => {
//     // data
//     const sentense1 = "Hello my friends!";
//     const sentense2 = "JS - is  best programming languages!";
//
//
//     // action
//     const result1 = splitIntoWords(sentense1);
//     const result2 = splitIntoWords(sentense2);
//
//     // expected result
//     expect(result1.length).toBe(3);
//     expect(result1[0]).toBe("hello");
//     expect(result1[1]).toBe("my");
//     expect(result1[2]).toBe("friends");
//
//     expect(result2.length).toBe(5);
//     expect(result2[0]).toBe("js");
//     expect(result2[1]).toBe("is");
//     expect(result2[2]).toBe("best");
//     expect(result2[3]).toBe("programming");
//     expect(result2[4]).toBe("languages");
// });