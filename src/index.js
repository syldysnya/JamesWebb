import "./styles/index.scss";

const centerCell = document.getElementById('toggle');

let i = document.getElementById('menu').childNodes;

centerCell.addEventListener('click', function () {

    this.classList.toggle("transparent")

    i[1].style.transform = 'translateY(-14.3vh)';
    i[3].style.transform = 'translate(12.6vh, -102.5%)';
    i[5].style.transform = 'translate(12.6vh, 102.5%)';
    i[7].style.transform = 'translateY(14.3vh)';
    i[9].style.transform = 'translate(-12.6vh, 102.5%)';
    i[11].style.transform = 'translate(-12.6vh, -102.5%)';
    
    i[13].style.transform = 'translateY(-28.6vh)';
    i[15].style.transform = 'translate(12.6vh, -307%)';
    i[17].style.transform = 'translate(25.2vh, -206%)';
    i[19].style.transform = 'translate(25.2vh, 0%)';
    i[21].style.transform = 'translate(25.2vh, 206%)';
    i[23].style.transform = 'translate(12.6vh, 307%)';
    i[25].style.transform = 'translateY(28.6vh)';
    i[27].style.transform = 'translate(-12.6vh, 307%)';
    i[29].style.transform = 'translate(-25.2vh, 206%)';
    i[31].style.transform = 'translate(-25.2vh, 0%)';
    i[33].style.transform = 'translate(-25.2vh, -206%)';
    i[35].style.transform = 'translate(-12.6vh, -307%)';

});
