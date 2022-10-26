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

export function addMoneyToBudget(building: BuildingsType, money: number) {
    building.budget += money;
}

export const deleteHouse = (city: CityType, street: string) => {
    city.houses = city.houses.filter(s => s.address.street.title !== street);
}

export const repairedHouse = (house: HouseType) => house.repaired = true;
export const deleteStaff = (build: BuildingsType, count: number) => build.staffCount -= count;
export const addStaff = (build: BuildingsType, count: number) => build.staffCount += count;
export const createMessge = (city: CityType) => `Hello ${city.title} ${city.citizensNumber} people`;