export const sortArrayByTimestamp = (array: []) => {
    return array.sort(( a, b ) => {
        if ( a.timestamp < b.timestamp ){
          return -1;
        }
    
        if ( a.timestamp > b.timestamp ){
          return 1;
        }
        
        return 0;
      })
}

export const zeroBeforeNumber = (number: number) => {
    return (number < 10) ? `0${number}` : `${number}`;
}

export const getDateAndTime = (date: string) => {
    const newDate = new Date(date);
    const dateDay = zeroBeforeNumber(newDate.getMonth());
    const month = zeroBeforeNumber(newDate.getMonth());
    const year = newDate.getFullYear();
    const hour = zeroBeforeNumber(newDate.getHours());
    const minutes = zeroBeforeNumber(newDate.getMinutes());

    return `${dateDay}.${month}.${year}, ${hour}:${minutes}`
}

export const getInputDayTime = (date: string) => {
    const newDate = new Date(date);
    const dateDay = zeroBeforeNumber(newDate.getMonth());
    const month = zeroBeforeNumber(newDate.getMonth());
    const year = newDate.getFullYear();
    const hour = zeroBeforeNumber(newDate.getHours());
    const minutes = zeroBeforeNumber(newDate.getMinutes());

    return `${year}-${month}-${dateDay}T${hour}:${minutes}`
}