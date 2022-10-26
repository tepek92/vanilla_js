const sentense = "Hello my friends!";

export const sum = (a: number, b: number) => a + b;
export const mult = (a: number, b: number) => a * b;

export const splitIntoWords = (sentense: string) => {
    return sentense
        .toLowerCase().split(' ')
        .map(s => s.replace(/[^a-zа-яё]/g, ''))
        .filter(s => s !== '');
};

