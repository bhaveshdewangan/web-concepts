const data = [
    { direction: 'Northwest', element: 'Metal', color: 'Silver', meaning: 'Elder', colorCode: '#ECE9E9' },
    { direction: 'North', element: 'Water', color: 'Blue', meaning: 'Change', colorCode: '#0058AB' },
    { Northeast: 'North', element: 'Earth', color: 'Yellow', meaning: 'Direction', colorCode: '#EFF182' },
    { direction: 'West', element: 'Metal', color: 'Gold', meaning: 'Youth', colorCode: '#FCC201' },
    { direction: 'Center', element: 'All', color: 'Purple', meaning: 'Harmony', colorCode: '#6A0DAD' },
    { direction: 'East', element: 'Wood', color: 'Light Blue', meaning: 'Future', colorCode: '#89CFF0' },
    { direction: 'Southwest', element: 'Earth', color: 'Brown', meaning: 'Tranquility', colorCode: '#7B3F00' },
    { direction: 'South', element: 'Fire', color: 'Orange', meaning: 'Fame', colorCode: '#FF781F' },
    { direction: 'Southeast', element: 'Wood', color: 'Green', meaning: 'Romance', colorCode: '#689f38' },
];
const table_body = document.getElementById('table_body');
for (let i = 0; i < data.length; i++) {
    const e_tr = document.createElement('tr');

    for(let [key, value] of Object.entries(data[i])) {
        const e_th = document.createElement('th');
        e_th.innerHTML = key !== 'colorCode' ? value : "<input type='text' data-uppercase/>";
        e_th.style["width"] = 100+'px';
        e_th.style["border"] = '0.5px solid black';
        if(key == 'color') {
            // e_th.style["background-color"] = data[i].colorCode;
            e_th.style["color"] = data[i].colorCode;
        }
        // e_th.addEventListener('click', this.logicToPerform.bind(this, e));
        e_tr.appendChild(e_th);
    }
    table_body.appendChild(e_tr);
}   

document.querySelector('#bauga-table').addEventListener('keyup', (e)=>{
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});
document.querySelector('#bauga-table').addEventListener('click', (e)=>{
    console.log(e);
    if(e.target.tagName == 'TH') {
        e.target.innerText = e.target.innerText.toUpperCase();
    }
});
