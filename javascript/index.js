const ratingEle = document.querySelectorAll(".rating");

let selectedRating = "";

const btn = document.getElementById("btn");
ratingEle.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (e) => {
    // console.log(e.target.innerText || e.target.parentNode.innerText);
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

const container = document.getElementById("container");
btn.addEventListener("click", () => {
  if (selectedRating != "") {
    container.innerHTML = `
    <strong>Thank You </strong>
    <br/>
    <p>for give your valuable Feedback</p>
    <br/>
    <br/>
    <strong>FeedBack :: ${selectedRating}.</strong>
    <p>We'll use your feedback to inprove our customer support.</p>
    `;
  }
});

const removeActive = () => {
  ratingEle.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
};
