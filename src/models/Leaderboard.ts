
export default interface LeaderboardModel {
    id: string,
    name: string,
    ranking: number,
    status: string,
    entries: LeaderboardEntry[]
}


interface LeaderboardEntry {
    id: string,
    name: string,
    subjects: Item[]
}

export interface Item {
    name: string,
    value: number,
    status: boolean
}
