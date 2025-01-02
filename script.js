let anchors = document.querySelectorAll('a.anchor');
let containers = document.querySelectorAll('main > section');
const cards = document.querySelectorAll('div.card');
const feedbacksContainer = document.querySelector('div.feedbacks-container');
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
    },
    {
      id: 6,
      content: "The 'About Me' section is very detailed and gives a good overview of your skills and experience. Adding a timeline to visually represent your career journey could enhance this section even further.",
      likes: 75,
      dislikes: 9,
    },
    {
      id: 7,
      content: "The contact form is functional, but I noticed that there's no validation for the email field. Allowing users to submit incorrect or blank emails might result in missed opportunities.",
      likes: 54,
      dislikes: 20,
    },
    {
      id: 8,
      content: "Including links to your GitHub repositories in the projects section is a fantastic idea. It might also help to provide a small preview or GIF showcasing the app's functionality for each project.",
      likes: 96,
      dislikes: 5,
    },
    {
      id: 9,
      content: "The website performs exceptionally well on desktop, but the loading time on mobile could be optimized further. Using lazy loading for images might be a good approach to address this.",
      likes: 81,
      dislikes: 7,
    },
    {
      id: 10,
      content: "The resume download feature works seamlessly. It might be worth adding a short note about the file format (e.g., PDF) to avoid confusion for users who expect a different format.",
      likes: 33,
      dislikes: 10,
    },
    {
      id: 11,
      content: "The footer section is minimalistic, but it could benefit from additional elements like a quick navigation menu or a small tagline summarizing your expertise.",
      likes: 40,
      dislikes: 6,
    },
    {
      id: 12,
      content: "The blog section is a great idea, but I noticed that some articles lack featured images or tags. Adding these elements would make the blog posts more engaging and easier to browse.",
      likes: 72,
      dislikes: 12,
    },
    {
      id: 13,
      content: "I found the typography to be clean and easy to read. However, the font size for some headers on mobile devices might be slightly larger than necessary, causing line breaks inappropriately.",
      likes: 63,
      dislikes: 5,
    },
    {
      id: 14,
      content: "The carousel in the projects section is smooth and works well. Adding swipe gestures for mobile users would make it even more intuitive to navigate.",
      likes: 45,
      dislikes: 3,
    },
    {
      id: 15,
      content: "Your LinkedIn and GitHub profiles are prominently displayed, which is great. Perhaps consider linking your blog posts to related projects or GitHub repositories for more context.",
      likes: 58,
      dislikes: 2,
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