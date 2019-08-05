import { LeaderboardEntry } from '../models/Leaderboard';

export const saveToServer = (data: LeaderboardEntry) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    return fetch('http://hungry-stingray-66.localtunnel.me/data', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({ name: data.name, subjects: data.subjects })
    }).then(resp => resp.status);
};

export const http = async (id: string): Promise<LeaderboardEntry> => {
    return new Promise(resolve => {
        fetch('http://hungry-stingray-66.localtunnel.me/data/' + id)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};
