let anchors = document.querySelectorAll('a.anchor');
let containers = document.querySelectorAll('main > section');
const cards = document.querySelectorAll('div.card');
const feedbacksContainer = document.querySelector('div.feedbacks-container');
const feedbacks = [
    {
        id: 1,
        content: "The portfolio design is clean and user-friendly. Great job!",
        likes: 45,
        dislikes: 2,
    },
    {
        id: 2,
        content: "Consider adding animations to make transitions smoother.",
        likes: 30,
        dislikes: 5,
    },
    {
        id: 3,
        content: "The projects section could use more detailed descriptions.",
        likes: 25,
        dislikes: 8,
    },
    {
        id: 4,
        content: "The dark mode feature is fantastic and easy on the eyes.",
        likes: 50,
        dislikes: 1,
    },
    {
        id: 5,
        content: "The contact form is functional, but it lacks a confirmation message after submission.",
        likes: 18,
        dislikes: 10,
    },
    {
        id: 6,
        content: "The site performs well on desktop but could be more responsive on smaller devices.",
        likes: 22,
        dislikes: 6,
    },
];
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('shown', entry.isIntersecting);
    });
},{
    threshold: 0.25
})
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
// observer.observe(cards);
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