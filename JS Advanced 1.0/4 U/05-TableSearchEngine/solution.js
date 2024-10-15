function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    
    const serchInputRef = document.getElementById('searchField');
    const tableRowRef = document.querySelectorAll('tbody tr');
    function onClick() {
       let searchText = serchInputRef.value;
       
       for (let row of tableRowRef){
        const tableDataRef = row.querySelectorAll('td');
        for(let data of tableDataRef){
            if(data.textContent.includes(searchText)){
                row.classList.add('select');
                break;
            }else{
                row.classList.remove('select'); 
            }
        }
       }
    }
 }