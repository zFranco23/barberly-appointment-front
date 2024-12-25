
export const formatDateToHours = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';  
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  }

  export const getDayNumberByNumber = (day: number) => {
    return { 
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }[day] ?? 'Unknown'
  }
  