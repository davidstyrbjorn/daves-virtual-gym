// Formatted as: 2021-12-28 || YYYY-DD-MM
export function getTodaysDateStringFormattedAsKey(){
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0];
}

export function formatDateToKey(date: Date) : string {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0];
}

export function daysInMonth (month : number, year : number) : number {
    return new Date(year, month, 0).getDate();
}