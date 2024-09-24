const listbgimg = document.querySelectorAll('.bg');
const welcomemsg = document.querySelector('.scrollment h1');
const downarr = document.getElementById('downarr');

window.addEventListener("scroll", (event) => {
    const scrollamount = window.scrollY;

    listbgimg.forEach((bg, index) => {
        if (index == 0 ){
            bg.style.transform = `translateY(${(scrollamount)*0.9}px)`;
        }
        else if (index == 1){
            bg.style.transform = `translateY(${(scrollamount)/2}px)`;
        }
        else if (index == 2){
            bg.style.transform = `translateY(${(scrollamount)/3}px)`;
        }
        else if (index == 3){
            bg.style.transform = `translateY(${(scrollamount)/3}px)`;
        }
        else if (index == 4){
            bg.style.transform = `translateY(${(scrollamount)/75}px)`;
        }
        else if (index == 6){
            bg.style.transform = `translateY(${(scrollamount)/50}px)`;
        }
        else{
            welcomemsg.style.transform = `translateY(${(scrollamount)*1.2}px)`;
            downarr.style.transform = `translateY(${(scrollamount)*1.3}px)`;
        }
    })
})



