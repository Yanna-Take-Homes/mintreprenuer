const addReviewBtn = document.querySelector('#add-review-btn');
addReviewBtn.addEventListener('click', toggleModal);

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
    toggleModal();
    stars.forEach(star => star.classList.remove('fas'));
}

function toggleModal () {
    const modalCtn = document.querySelector('.modal-ctn');
    modalCtn.classList.toggle('hidden');
}

function createDomReviewCtn () {
    const reviewCtn = document.createElement('div');
    reviewCtn.className = 'review-ctn';
    return reviewCtn;
}

function createDomStarIcons (reviewObj) {
    const reviewVisualCtn = document.createElement('div');
    reviewVisualCtn.className = ('review-visual-ctn');

    for (let i=1; i<=5; i++) {
        const starIcon = document.createElement('i');
        if (i<=reviewObj.rating) {
            starIcon.classList.add('fas');
        } else if (i>reviewObj.rating) {
            starIcon.classList.add('fal');
        }
        starIcon.classList.add('fa-star');
        reviewVisualCtn.appendChild(starIcon);
    }

    return reviewVisualCtn;
}

function createDomReviewSpan (reviewObj) {
    const reviewSpan = document.createElement('span');
    reviewSpan.textContent = reviewObj.rating;
    reviewSpan.className = 'review-score';
    return reviewSpan;
}

function createDomReviewP (reviewObj) {
    const reviewP =  document.createElement('p');
    reviewP.textContent = reviewObj.review;
    reviewP.className = 'review';
    return reviewP;
}

function addReviewToDom(reviewObj) {
    const reviewCtn =  createDomReviewCtn();
    const reviewVisualCtn = createDomStarIcons(reviewObj);
    const reviewSpan = createDomReviewSpan(reviewObj);
    const reviewP = createDomReviewP(reviewObj);

    reviewCtn.appendChild(reviewVisualCtn);
    reviewCtn.appendChild(reviewSpan);
    reviewCtn.appendChild(reviewP);

    const reviewsCtn = document.querySelector('.reviews-ctn');
    reviewsCtn.appendChild(reviewCtn);
}






