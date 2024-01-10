document.addEventListener("DOMContentLoaded", function () {
    const featuresList = document.getElementById("features-list");

    const features = [
        "Experienced and dedicated language instructors",
        "Tailored learning experiences for individual needs",
        "Immersive and dynamic language courses",
        "Cultural enrichment opportunities",
        "Personalized approach to language education",
    ];

    features.forEach((feature) => {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        featuresList.appendChild(listItem);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".numbers [data-count]");

    const options = {
        threshold: 0.7,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                let currentCount = 0;

                const interval = setInterval(() => {
                    if (currentCount <= count) {
                        target.textContent = currentCount;
                        currentCount++;
                    } else {
                        clearInterval(interval);
                    }
                }, 20);

                observer.unobserve(target);
            }
        });
    }, options);

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});
