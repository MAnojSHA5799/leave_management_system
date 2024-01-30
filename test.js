let date_1 = new Date('02/02/2023');
let date_2 = new Date();

const days = (date_1, date_2) =>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
console.log(days(date_1, date_2) +" days to world cup");