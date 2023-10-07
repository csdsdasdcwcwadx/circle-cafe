export const handleDate = (date: string, isTime: boolean = false) => {
    const utcDateTime = date;
    const localDateTime = new Date(utcDateTime).toLocaleString('en-US', { timeZone: 'Asia/Taipei', hour12: false });
    if(isTime) return localDateTime.split(',')[1];
    return localDateTime.split(',')[0];
}