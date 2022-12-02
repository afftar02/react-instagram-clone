const useDate = (date) => {
    const yearsAmount = new Date().getFullYear() - new Date(date).getFullYear();
    const monthsAmount = new Date().getMonth() - new Date(date).getMonth();
    const daysAmount = new Date().getDate() - new Date(date).getDate();
    const hoursAmount = new Date().getHours() - new Date(date).getHours();
    const minutesAmount = new Date().getMinutes() - new Date(date).getMinutes();

    if (yearsAmount > 0) {
        return yearsAmount + (yearsAmount !== 1 ? ' YEARS' : ' YEAR');
    }
    else if (monthsAmount > 0) {
        return monthsAmount + (monthsAmount !== 1 ? ' MONTHS' : ' MONTH');
    }
    else if (daysAmount > 0) {
        return daysAmount + (daysAmount !== 1 ? ' DAYS' : ' DAY');
    }
    else if (hoursAmount > 0) {
        return hoursAmount + (hoursAmount !== 1 ? ' HOURS' : ' HOUR');
    }
    else if (minutesAmount > 0) {
        return minutesAmount + (minutesAmount !== 1 ? ' MINUTES' : ' MINUTE');
    }
    else {
        return 'FEW SECONDS';
    }
};

export default useDate;