export function formatDate(time){
    if(!time) return '';
    const date = time.toDate();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
}