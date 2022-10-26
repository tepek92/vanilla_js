import {arrStudents, myMap} from "./05";

type StudentType = {
    id: number
    name: string
    age: number
    isMarried: boolean
    scores: number
}
let student: StudentType[];

beforeEach(() => {
    student = arrStudents;
});

test('test my map', () => {
    let result = myMap(student, (s: any) => 'My name is ' + s.name);
    let expected = student.map(s => 'My name is ' + s.name);
    for (let i = 0; i < expected.length; i++) {
        expect(result[i]).toBe(expected[i]);
    }
    expect(result[0]).toBe('My name is Bob');
    expect(result.length).toBe(expected.length);
})

test.skip('test map', () => {
    let result = student.map(s => `${s.name} score ${s.scores}`);

    expect(result.length).toBe(4);
    expect(result[3]).toBe('John score 100');
})
