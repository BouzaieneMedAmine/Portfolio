let anchors = document.querySelectorAll('a.anchor');
let containers = document.querySelectorAll('main > section');
const cards = document.querySelectorAll('div.card');
const feedbacksContainer = document.querySelector('div.feedbacks-container');
let scrollToTopButton = document.querySelector('button.scroll-to-top');
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    containers.forEach((container, index) => {
        if (scroll > container.offsetTop - 100) {
            anchors.forEach(anchor => {
                anchor.classList.remove('active');
            });
            anchors[index].classList.add('active');
        }
    });
});
window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    if(scroll > 100){
        scrollToTopButton.style.display = 'block';
    }else{
        scrollToTopButton.style.display = 'none';
    }
})
scrollToTopButton.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
function hireme(){
    alert("You are good enough please wait for a response from our HR")
}
