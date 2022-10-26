
// Чтобы тест был модулем и мог скомпилироваться.
import {deep_copy} from "./deep_copy";

export {}

test('1. Simple object', () => {
    // star value
    let man = {
        name: 'John',
        age: 28
    };
    // let manFullCopy = {...man};
    let manFullCopy = deep_copy(man);

    // action
    manFullCopy.age = 5;

    // expected result
    expect(manFullCopy.age).toBe(5);

    expect(man.age).toBe(28);
});

test('2. Array of primitives', () => {
    // star value
    let numbers = [1, 2, 3]
    // let numbersFullCopy = {...numbers}
    let numbersFullCopy = deep_copy(numbers);


    // action
    numbersFullCopy[0] = 9;
    numbersFullCopy[2] = 0;

    // expected result
    expect(numbersFullCopy[0]).toBe(9);
    expect(numbersFullCopy[2]).toBe(0);

    expect(numbers[0]).toBe(1);
    expect(numbers[2]).toBe(3);
});

test('3. Object inside an object', () => {
    // star value
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    // let man1FullCopy = {...man1, mother: {...man1.mother}};
    let man1FullCopy = deep_copy(man1);

    // action
    man1FullCopy.name = 'Tor';
    man1FullCopy.mother.age = 105;

    // expected result
    expect(man1FullCopy.name).toBe('Tor');
    expect(man1FullCopy.mother.age).toBe(105);

    expect(man1.name).toBe('John');
    expect(man1.mother.age).toBe(50);
});

test('4. Array of primitives inside an object', () => {
    // star value
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    // let man2FullCopy = {...man2, friends: [...man2.friends]};

    let man2FullCopy = deep_copy(man2);


    // action
    man2FullCopy.name = 'Tor';
    man2FullCopy.friends[1] = 'Loki';

    // expected result
    expect(man2FullCopy.name).toBe('Tor');
    expect(man2FullCopy.friends[1]).toBe("Loki");
    expect(man2.name).toBe('John');
    expect(man2.friends[1]).toBe("Steven");

});

test('5. Array of objects', () => {
    // star value
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    // let peopleFullCopy = people.map(obj => ({...obj}));

    let peopleFullCopy = deep_copy(people);

    // action
    peopleFullCopy[0].name = 'Tor';
    peopleFullCopy[2].age = 150;

    // expected result
    expect(peopleFullCopy[0].name).toBe('Tor');
    expect(peopleFullCopy[2].age).toBe(150);
    expect(people[0].name).toBe('Peter');
    expect(people[2].age).toBe(28);
});

test('6. Array of objects inside object', () => {
    // star value
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    // let man3FullCopy = {...man3, friends: man3.friends.map(obj => ({...obj}))};

    let man3FullCopy = deep_copy(man3);

    // action
    man3FullCopy.name = 'Tanos';
    man3FullCopy.friends[2].age = 99;

    // expected result
    expect(man3FullCopy.name).toBe('Tanos');
    expect(man3FullCopy.friends[2].age).toBe(99);

    expect(man3.name).toBe('John');
    expect(man3.friends[2].age).toBe(28);

});

test('7. Object inside an object, inside an object', () => {
    // star value
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    // let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}};

    let man4FullCopy = deep_copy(man4);

    // action
    man4FullCopy.age = 100;
    man4FullCopy.mother.name = 'Lola';
    man4FullCopy.mother.work.position = 'pilot';

    // expected result
    expect(man4FullCopy.age).toBe(100);
    expect(man4FullCopy.mother.name).toBe('Lola');
    expect(man4FullCopy.mother.work.position).toBe('pilot');

    expect(man4.age).toBe(28);
    expect(man4.mother.name).toBe('Kate');
    expect(man4.mother.work.position).toBe('doctor');
});

test('8. Array of objects inside object -> object', () => {
    // star value
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    // let man5FullCopy = {
    //     ...man5,
    //     mother: {
    //         ...man5.mother,
    //         work: {...man5.mother.work},
    //         parents: man5.mother.parents.map(obj => ({...obj}))
    //     }
    // }

    let man5FullCopy = deep_copy(man5);

    // action
    man5FullCopy.age = 100;
    man5FullCopy.mother.name = 'Lola';
    man5FullCopy.mother.work.position = 'pilot';
    man5FullCopy.mother.parents[0].age = 99;

    // expected result
    expect(man5FullCopy.age).toBe(100);
    expect(man5FullCopy.mother.name).toBe('Lola');
    expect(man5FullCopy.mother.work.position).toBe('pilot');
    expect(man5FullCopy.mother.parents[0].age).toBe(99);

    expect(man5.age).toBe(28);
    expect(man5.mother.name).toBe('Kate');
    expect(man5.mother.work.position).toBe('doctor');
    expect(man5.mother.parents[0].age).toBe(80);
});

test('9. Object inside an object -> array -> object ->  object', () => {
    // star value
    let man6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    // let man6FullCopy = {
    //     ...man6,
    //     mother: {
    //         ...man6.mother,
    //         work: {...man6.mother.work},
    //         parents: man6.mother.parents.map( obj => ({ ...obj, favoriteDish: {...obj.favoriteDish}}))
    //     }
    // };
    let man6FullCopy = deep_copy(man6);

    // action
    man6FullCopy.age = 100; // 28
    man6FullCopy.mother.name = 'Lola'; // Kate
    man6FullCopy.mother.work.position = 'pilot'; // doctor
    man6FullCopy.mother.parents[0].age = 99; // 80
    man6FullCopy.mother.parents[0].favoriteDish.title = 'solanka'; // borscht

    // expected result
    expect(man6FullCopy.age).toBe(100);
    expect(man6FullCopy.mother.name).toBe('Lola');
    expect(man6FullCopy.mother.work.position).toBe('pilot');
    expect(man6FullCopy.mother.parents[0].age).toBe(99);
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe('solanka');

    expect(man6.age).toBe(28);
    expect(man6.mother.name).toBe('Kate');
    expect(man6.mother.work.position).toBe('doctor');
    expect(man6.mother.parents[0].age).toBe(80);
    expect(man6.mother.parents[0].favoriteDish.title).toBe('borscht');
});

test('10. Array of objects inside an object -> object -> array -> object ->  object', () => {
    // star value
    let man7 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    // let man7FullCopy = {
    //     ...man7,
    //     mother: {
    //         ...man7.mother,
    //         work: {...man7.mother.work},
    //         parents: man7.mother.parents.map( obj => ({
    //             ...obj,
    //             favoriteDish: {
    //                 ...obj.favoriteDish,
    //                 ingredients: obj.favoriteDish.ingredients.map( obj => ({...obj}))
    //             }
    //         }) )
    //     }
    //
    // }

    let man7FullCopy = deep_copy(man7);

    // action
    man7FullCopy.age = 100; // 28
    man7FullCopy.mother.name = 'Lola'; // Kate
    man7FullCopy.mother.work.position = 'pilot'; // doctor
    man7FullCopy.mother.parents[0].age = 99; // 80
    man7FullCopy.mother.parents[0].favoriteDish.title = 'solanka'; // borscht
    man7FullCopy.mother.parents[0].favoriteDish.ingredients[2].title = 'water'; // carrot

    // expected result
    expect(man7).not.toBe(man7FullCopy);
    expect(man7.mother).not.toBe(man7FullCopy.mother);
    expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents);
    expect(man7.mother.parents[0].favoriteDish).not.toBe(man7FullCopy.mother.parents[0].favoriteDish);
    expect(man7.mother.parents[0].favoriteDish.ingredients).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients);

    expect(man7FullCopy.age).toBe(100);
    expect(man7FullCopy.mother.name).toBe('Lola');
    expect(man7FullCopy.mother.work.position).toBe('pilot');
    expect(man7FullCopy.mother.parents[0].age).toBe(99);
    expect(man7FullCopy.mother.parents[0].favoriteDish.title).toBe('solanka');
    expect(man7FullCopy.mother.parents[0].favoriteDish.ingredients[2].title).toBe('water');

    expect(man7.age).toBe(28);
    expect(man7.mother.name).toBe('Kate');
    expect(man7.mother.work.position).toBe('doctor');
    expect(man7.mother.parents[0].age).toBe(80);
    expect(man7.mother.parents[0].favoriteDish.title).toBe('borscht');
    expect(man7.mother.parents[0].favoriteDish.ingredients[2].title).toBe('carrot');
});