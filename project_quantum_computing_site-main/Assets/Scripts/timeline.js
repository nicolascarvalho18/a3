const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const content = entry.target.querySelector('.timeline-content');
        const dot = entry.target.querySelector('.timeline-dot');
        const timelineItem = entry.target;
        
        if(entry.isIntersecting){
            content.classList.add("timeline-appear");
            dot.classList.add("animate-dot");
            timelineItem.classList.add("blue-bar");
        }
    })
});

timelineItems.forEach((item) => observer.observe(item));