export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
};

type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '32323': {id: 13232301, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
// доставание - users[1] - O(1)
// добавлнеие const user = {id: 555, name: 'Impreza'};
// users[user.id] = user;  O(1);
// удаление - users[user.id].delete - O(1) - полностью удалит объект по этому ключу

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 13232301, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

// доставание - usersArray.find(u => u.id === 1) - O(n)
// добавление - userArray.push(user) - O(1) - но тогда может быть дубликат, а если фильторовать то опять O(n)
// удалнеие - usersArray.filter(u => u.id !== user.id) - O(n)