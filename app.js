const mainContainer = document.querySelector('#main-container')

function genDiv(rows, cols){
    mainContainer.style.setProperty('--grid-rows', rows);
    mainContainer.style.setProperty('--grid-cols', cols);
    
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        mainContainer.appendChild(cell).className = 'grid-item';
    }
    
}
genDiv(60, 120)