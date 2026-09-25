const topicCards = document.querySelectorAll(".topic-card");
const topicsSection = document.querySelector("#topics");
const topicPanels = document.querySelectorAll(".topic-panel");
const backButtons = document.querySelectorAll(".back-button");
const navLink = document.querySelector(".nav-link");

function openTopic(topic) {
    topicPanels.forEach((panel) => {
        panel.hidden = panel.id !== topic;
    });

    topicsSection.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeTopic() {
    topicPanels.forEach((panel) => {
        panel.hidden = true;
    });

    topicsSection.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

topicCards.forEach((card) => {
    card.addEventListener("click", () => {
        openTopic(card.dataset.topic);
    });
});

backButtons.forEach((button) => {
    button.addEventListener("click", closeTopic);
});

navLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeTopic();
    document.querySelector("#topics").scrollIntoView({ behavior: "smooth" });
});
