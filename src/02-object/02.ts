export const noname = () => "hi";

type CityTypeLocal = {
    title: string
    country: string
};
type AddressType = {
    street: string
    city: CityTypeLocal
};
type TechType = {
    id: number
    title: string
};
export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
};


export const student: StudentType = {
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


