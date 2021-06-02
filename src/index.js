import "./styles/index.scss";

const centerCell = document.getElementById('toggle');

let i = document.getElementById('menu').childNodes;

centerCell.addEventListener('click', function () {

    this.classList.add("transparent")

    i[1].style.transform = 'translateY(-146px)';
    i[3].style.transform = 'translate(125px, -73px)';
    i[5].style.transform = 'translate(125px, 73px)';
    i[7].style.transform = 'translateY(146px)';
    i[9].style.transform = 'translate(-125px, 73px)';
    i[11].style.transform = 'translate(-125px, -73px)';
    
    i[13].style.transform = 'translateY(-292px)';
    i[15].style.transform = 'translate(125px, -219px)';
    i[17].style.transform = 'translate(250px, -146px)';
    i[19].style.transform = 'translate(250px, 0px)';
    i[21].style.transform = 'translate(250px, 146px)';
    i[23].style.transform = 'translate(125px, 219px)';
    i[25].style.transform = 'translateY(291px)';
    i[27].style.transform = 'translate(-125px, 219px)';
    i[29].style.transform = 'translate(-250px, 146px)';
    i[31].style.transform = 'translate(-250px, 0px)';
    i[33].style.transform = 'translate(-250px, -146px)';
    i[35].style.transform = 'translate(-125px, -219px)';
});

// centerCell.addEventListener('click', togglecells())
// console.log(i)