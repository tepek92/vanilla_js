import {StudentType} from "../02-object/02";
import {addSkill, liveStudentInCity, makeStudentDeActive} from "./03_01";

let student: StudentType;

beforeEach(() => {
   student = {
       name: "Pasha",
       age: 29,
       isActive: true,
       address: {
           street: "Krasnoobsk",
           city: {
               title: "Novosibirsk",
               country: "Russia"
           }
       },
       technologies: [
           {id: 1, title: "HTML"}, {id: 2, title: "CSS"}, {id: 3, title: "Java Script"}
       ]
   };
});

// test('add skill for student', () => {
//     addSkill(student, 'REACT');
//     expect(student.technologies.length).toBe(4);
//     expect(student.technologies[3].title).toBe('REACT');
//     expect(student.technologies[3].id).toBeDefined();
// })
//
// test('student dont active', () => {
//     expect(student.isActive).toBe(true);
//     makeStudentDeActive(student);
//     expect(student.isActive).toBe(false);
// })
//
// test('student live in city', () => {
//     let result1 = liveStudentInCity(student, "Moscow");
//     let result2 = liveStudentInCity(student, "Novosibirsk");
//     expect(result1).toBe(false);
//     expect(result2).toBe(true);
// })