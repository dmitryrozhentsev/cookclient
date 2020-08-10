export interface ICookItemFromServer {
    date: string,
    description: string,
    title: string,
    img?: string
    __v: number,
    _id: string,
}

export interface ICookItem {
    id: string,
    title: string,
    description: string,
    img?: string
    date: string
}