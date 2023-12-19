changeSVG = () =>{

    // Selection of id's and assigning
    let svg = document.getElementById('svg');
    let textPercent =  document.getElementById('textPercent');
    let rectBar = document.getElementById('rectBar');

    // listening for click event in the svgId 
    svg.addEventListener('click', () => {
        let width = parseInt (rectBar.getAttribute('width'));
        // checking if the width is 100 adn increasing it by 10 on each click 
        let newWidth;
        if(width < 100){
            newWidth = width + 10;
        }
        else{
            newWidth = 70;
        }

        rectBar.setAttribute('width', newWidth + '%');
        textPercent.textContent = newWidth + '%';
    });
};

changeSVG();
