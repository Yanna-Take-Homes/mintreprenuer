const modalCtn = document.querySelector('.modal-ctn');
const reviewsCtn = document.querySelector('.reviews-ctn');

const addReviewBtn = document.querySelector('#add-review-btn');
addReviewBtn.addEventListener('click', () => toggleHiding(modalCtn));

const submitReviewBtn = document.querySelector('#submit-review-btn');
submitReviewBtn.addEventListener('click', submitReview);

const stars = document.querySelectorAll('.rating-star');
stars.forEach( star => addStarEvents(star));

let rating;

function addStarEvents (star) {
    star.addEventListener('mouseover', () => starHover(star));
    star.addEventListener('mouseout', () => starHover(star));
    star.addEventListener('click', () => starClick(star));
}

function toggleStarStyle (numOfStars) {
    for (let i=0; i<=numOfStars; i++) {
        stars[i].classList.toggle('fas');
    }
}

function starHover (activeStar) {
    const starNum = Number((activeStar.id)[5]);
    toggleStarStyle(starNum);
}

function starClick (activeStar) {
    const starNum = Number((activeStar.id)[5]);
    rating = starNum + 1;
    toggleStarStyle(starNum);
}

function submitReview () {
    const review = document.querySelector('#review-input').value || 'book was fluff';
    document.querySelector('#review-input').value = '';
    const newReview = {'rating':rating,'review':review};
    addReviewToDom(newReview);
    toggleHiding(modalCtn);
    stars.forEach(star => star.classList.toggle('fas'));
}

function toggleHiding (ctn) {
    ctn.classList.toggle('hidden');
}

function addReviewToDom(reviewObj) {
    const reviewVisualCtn = document.createElement('div');
    reviewVisualCtn.className = ('review-visual-ctn');

   for (let i=1; i<=5; i++) {
       if (i<=reviewObj.rating) {
           const starIcon = document.createElement('i');
           starIcon.className = 'fas';
           starIcon.classList.add('fa-star');
           reviewVisualCtn.appendChild(starIcon);
       } else {
           const starIcon = document.createElement('i');
           starIcon.className = 'fal';
           starIcon.classList.add('fa-star');
           reviewVisualCtn.appendChild(starIcon);
       }
   }

    const reviewSpan = document.createElement('span');
    reviewSpan.textContent = reviewObj.rating;
    reviewSpan.className = 'review-score';

    const reviewP =  document.createElement('p');
    reviewP.textContent = reviewObj.review;
    reviewP.className = 'review';

    const reviewCtn = document.createElement('div');
    reviewCtn.className = 'review-ctn';

    reviewCtn.appendChild(reviewVisualCtn);
    reviewCtn.appendChild(reviewSpan);
    reviewCtn.appendChild(reviewP);

    reviewsCtn.appendChild(reviewCtn);
}






