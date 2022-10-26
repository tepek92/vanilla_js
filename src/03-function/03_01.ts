import {student, StudentType} from "../02-object/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};

export function makeStudentDeActive(student: StudentType) {
    student.isActive = false;
}

export function liveStudentInCity(student: StudentType, city: string) {
    return student.address.city.title === city;
}