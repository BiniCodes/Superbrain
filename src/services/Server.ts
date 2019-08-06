import { LeaderboardEntry } from '../models/Leaderboard';

const domain = 'http://10.0.0.162:4000/data';

export const getAll = () => {
    return new Promise(resolve => {
        fetch(domain)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};

export const saveToServer = (data: LeaderboardEntry) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return fetch(domain, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({ name: data.name, subjects: data.subjects })
    });
};

export const http = async (id: string): Promise<LeaderboardEntry> => {
    return new Promise(resolve => {
        fetch(domain + '/' + id)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};
