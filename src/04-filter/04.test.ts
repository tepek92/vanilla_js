import {arrStudents, myFilter} from "./04";

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

test('test my filter', () => {
    let result = myFilter(student, (s: any) => s.scores < 5);
    let expected = student.filter(s => s.id < 5);
    for (let i = 0; i < expected.length; i++) {
        expect(result[i]).toBe(expected[i]);
    }
    expect(result[0].id).toBe(1);
    expect(result[1].name).toBe(2);
})

test('test filtered', () => {
    let result = student.filter(s => s.scores >= 100);

    expect(result.length).toBe(2);
    expect(result[1].name).toBe('John');
})
