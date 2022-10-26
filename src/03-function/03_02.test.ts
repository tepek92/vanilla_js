import {addMoneyToBudget, addStaff, createMessge, deleteHouse, deleteStaff, repairedHouse} from "./03_02";

type StreetType = {
    title: string
};
type AddressType = {
    number: number
    street: StreetType
};
type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
};
type BuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
};
type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<BuildingsType>
    citizensNumber: number
};

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                number: 100,
                street: {
                    title: "Central Str"
                }
            }
        },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 102,
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
});


// test('change budget for HOSPITAL', () => {
//     addMoneyToBudget(city.governmentBuildings[0], 100000);
//     expect(city.governmentBuildings[0].budget).toBe(300000);
// });
//
// test('change budget for FIRE_STATION', () => {
//     addMoneyToBudget(city.governmentBuildings[1], -400000);
//     expect(city.governmentBuildings[1].budget).toBe(100000);
// });
//
// test('houses destroy', () => {
//     deleteHouse(city, 'Happy street');
//     expect(city.houses.length).toBe(1);
// });
//
// test('houses repaired', () => {
//     repairedHouse(city.houses[0]);
//     expect(city.houses[0].repaired).toBeTruthy();
// });
//
// test('delete stuff', () => {
//     deleteStaff(city.governmentBuildings[0], 30);
//     expect(city.governmentBuildings[0].staffCount).toBe(170);
// });
//
// test('add stuff', () => {
//     addStaff(city.governmentBuildings[1], 50);
//     expect(city.governmentBuildings[1].staffCount).toBe(1050);
// });
//
// test('hello city people', () => {
//     expect(createMessge(city)).toBe('Hello New York 1000000 people');
// });