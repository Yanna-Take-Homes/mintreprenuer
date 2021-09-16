const modalCtn = document.querySelector('.modal-ctn');
const reviewsCtn = document.querySelector('.reviews-ctn');

const addReviewBtn = document.querySelector('#add-review-btn');
addReviewBtn.addEventListener('click', toggleHiding);

const submitReviewBtn = document.querySelector('#submit-review-btn');
submitReviewBtn.addEventListener('click', submitReview);

function toggleHiding () {
    modalCtn.classList.toggle('hidden');
}

function addReviewToDom(reviewObj) {
    const reviewCtn = document.createElement('div');
    reviewCtn.className = 'review-ctn';

    const reviewVisualCtn = document.createElement('div');
    reviewVisualCtn.className = ('review-visual-ctn');

   for (let i = 0; i <= reviewObj.rating; i++) {
       const starIcon = document.createElement('i');
       starIcon.className = 'fas';
       starIcon.classList.add('fa-star');
       reviewVisualCtn.appendChild(starIcon);
   }

    const reviewSpan = document.createElement('span');
    reviewSpan.textContent = reviewObj.rating;
    reviewSpan.className = 'review-score';

    const reviewP =  document.createElement('p');
    reviewP.textContent = reviewObj.review;
    reviewP.className = 'review';

    reviewCtn.appendChild(reviewVisualCtn);
    reviewCtn.appendChild(reviewSpan);
    reviewCtn.appendChild(reviewP);

    reviewsCtn.appendChild(reviewCtn);
}

function submitReview () {
    const rating = 5 || document.querySelector('');
    const review = document.querySelector('#review-input').value || 'book was fluff';
    const newReview = {'rating':rating,'review':review};
    addReviewToDom(newReview);
    toggleHiding();
}









