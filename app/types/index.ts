export type TCategory = {
    id:string,
    catName: string
}

export type TPosts = {
    id: string,
    title: string,
    content: string,
    catName: string,
    createdAt: string,
    author: {
        name: string
    }
}