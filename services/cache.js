
export const saveToCache = (apiResponse, key) => {
    const dataToSave = JSON.stringify({
        data: apiResponse,
        time: Date.now()
    })
    localStorage.setItem(key, dataToSave)
}


export function getCachedData(key) {
    const cachedData = localStorage.getItem(key);

    if (cachedData) {
        const { data, time } = JSON.parse(cachedData);
        if (Date.now() - time <= 15 * 60 * 1000) {
            return data;
        } else {
            localStorage.removeItem(key);
        }
    }
    return null;
}
