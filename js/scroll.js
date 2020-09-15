const container = document.querySelector('.cards-container');
let containerDimensions =  container.getBoundingClientRect();
const containerWidth = containerDimensions.width;

let containerScroll = 0;

const nxtBtn = document.querySelector('.nxt');
const preBtn = document.querySelector('.pre');

nxtBtn.addEventListener('click', () => {
    container.scrollLeft = containerScroll + containerWidth;
    containerScroll += containerWidth;
    // console.log(containerScroll);
    if(container.scrollWidth < containerScroll){
        containerScroll -= containerWidth; 
    }
})

preBtn.addEventListener('click', () => {
    if(containerScroll !== 0){
        container.scrollLeft = containerScroll - containerWidth;
        containerScroll -= containerWidth;
    }
    // console.log(containerScroll);
})