export interface ICookItemFromServer {
    date: string,
    description: string,
    title: string,
    __v: number,
    _id: string,
}

export interface ICookItem {
    id: string,
    title: string,
    description: string,
    date: string
}