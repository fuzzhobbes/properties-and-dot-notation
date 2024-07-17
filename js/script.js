const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Learn JS",
  "Continue learning JS",
  "Learn to use JS with HTML/CSS",
];
learning.category = "Front End Development";
learning.topicImportance = "High";

learning.topic = "Javascript";
learning.learningGoals.splice(1, 1);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
//console.log(learning)
