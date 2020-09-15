const container = [...document.querySelectorAll('.cards-container')];

const nxtBtn = [...document.querySelectorAll('.nxt')];
const preBtn = [...document.querySelectorAll('.pre')];

container.map((item, index) => {
    let containerDimensions =  item.getBoundingClientRect();
    const containerWidth = containerDimensions.width;

    let containerScroll = 0;

    nxtBtn[index].addEventListener('click', () => {
        item.scrollLeft = containerScroll + containerWidth;
        containerScroll += containerWidth;
        // console.log(containerScroll);
        if(item.scrollWidth < containerScroll){
            containerScroll -= containerWidth; 
        }
    })

    preBtn[index].addEventListener('click', () => {
        if(containerScroll !== 0){
            item.scrollLeft = containerScroll - containerWidth;
            containerScroll -= containerWidth;
        }
        // console.log(containerScroll);
    })
})