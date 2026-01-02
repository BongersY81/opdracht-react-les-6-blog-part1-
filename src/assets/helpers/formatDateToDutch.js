function formatDateToDutch(dateToDutch) {
const date =  new Date(dateToDutch);
const options = {day:'numeric', month: 'long', year: 'numeric'};

return date.toLocaleDateString('nl-NL', options);
}





    export default formatDateToDutch