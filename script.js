let anchors = document.querySelectorAll('a.anchor');
let containers = document.querySelectorAll('main > section');
const cards = document.querySelectorAll('div.card');
const feedbacksContainer = document.querySelector('div.feedbacks-container');
let scrollToTopButton = document.querySelector('button.scroll-to-top');
const feedbacks = [
    {
      id: 1,
      content: "The portfolio design is clean and user-friendly. It is evident that a lot of effort went into crafting an interface that balances aesthetics with functionality. The choice of colors and typography complements the overall theme perfectly.",
      likes: 120,
      dislikes: 4,
    },
    {
      id: 2,
      content: "The responsiveness of the website is good, but there are a few glitches when viewing on very small screens like older iPhones. It would be great if these could be fixed to ensure the site works flawlessly on all devices.",
      likes: 87,
      dislikes: 15,
    },
    {
      id: 3,
      content: "The projects section is well-organized, but I feel that adding a filter option to sort projects by categories or technologies would improve the user experience. For instance, users could view React projects separately from data science projects.",
      likes: 67,
      dislikes: 8,
    },
    {
      id: 4,
      content: "The animations on the website add a nice touch and make the navigation feel more dynamic. However, some animations are slightly too long, which might make the user experience feel a bit slow for visitors in a hurry.",
      likes: 92,
      dislikes: 3,
    },
    {
      id: 5,
      content: "I appreciate the inclusion of a light/dark mode toggle. However, it would be great if the preference was saved in cookies or local storage so that the user's choice persists across sessions.",
      likes: 110,
      dislikes: 2,
    }
];
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
feedbacks.forEach((item,idx)=>{
    let feedback = document.createElement('div');
    feedback.classList.add('card');
    feedback.innerHTML = `
        <p>${item.content}</p>
        <div class="feedback-actions">
            <button><span>${item.likes}</span><i class="fa-solid fa-thumbs-up"></i></button>
            <button><span>${item.dislikes}</span><i class="fa-solid fa-thumbs-down"></i></button>
        </div>
    `;
    feedbacksContainer.appendChild(feedback);
})