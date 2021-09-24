let urls = {
    products: 'https://mintrepreneur-be.herokuapp.com/api/products',
    reviews: 'https://mintrepreneur-be.herokuapp.com/api/product-reviews'
};

const addReviewBtn = document.querySelector('#add-review-btn');
addReviewBtn.addEventListener('click', toggleModal);

const submitReviewBtn = document.querySelector('#submit-review-btn');
submitReviewBtn.addEventListener('click', submitReview);

const stars = document.querySelectorAll('.rating-star');
stars.forEach( star => addStarEvents(star));

const avgReview = document.querySelector('#reviews-avg-score');

let reviewAvg = 0;
let reviewCt = 0;
let reviewSum = 0;
let rating;

function calculateReviewAvg() {
    reviewAvg = Math.round(reviewSum/reviewCt);
    return reviewAvg
}

getData(urls.products).then( res => {
    const productTitle = document.querySelector('#title');
    productTitle.textContent = res["allProducts"][0].title;
});

getData(urls.reviews).then( res => {
    reviewCt = res["allReviews"].length;
    res["allReviews"].forEach(review => {
        addReviewToDom(review);
        reviewSum += review.rating;
        reviewCt++;
    });
    calculateReviewAvg()
    createDomStarIconsForAvg(reviewAvg);
    avgReview.textContent = reviewAvg;
});

async function getData (url) {
    let response = await fetch(url);
    return await response.json();
}

async function sendData (url, newReview) {
    axios.post(url, newReview);
}

function addStarsToDom(review,reviewVisualCtn) {
    (review.rating) && (review = review.rating);
    for (let i=1; i<=5; i++) {
        const starIcon = document.createElement('i');
        if (i <= review) {
            starIcon.classList.add('fas');
        } else if (i > review) {
            starIcon.classList.add('fal');
        }
        starIcon.classList.add('fa-star');
        reviewVisualCtn.appendChild(starIcon);
    } return reviewVisualCtn;
}

function createDomStarIcons (reviewObj) {
    const reviewVisualCtn = document.createElement('div');
    reviewVisualCtn.className = ('review-visual-ctn');
    return addStarsToDom(reviewObj,reviewVisualCtn);
}

function createDomStarIconsForAvg (reviewAvg) {
    const reviewVisualCtn = document.querySelector('.reviews-avg-ctn');
    return addStarsToDom(reviewAvg,reviewVisualCtn);
}

function addStarEvents (star) {
    star.addEventListener('mouseover', () => starHover(star));
    star.addEventListener('mouseout', () => starHover(star));
    star.addEventListener('click', () => starClick(star));
}

function toggleStarStyle (numOfStars) {
    for (let i=0; i<=numOfStars; i++) stars[i].classList.toggle('fas');
}

function starHover (activeStar) {
    const starNum = Number((activeStar.id)[5]);
    toggleStarStyle(starNum);
}

function starClick (activeStar) {
    const starNum = Number((activeStar.id)[5]);
    rating = starNum + 1;
    toggleStarStyle(starNum);
    stars.forEach( star => addStarEvents(star));
    toggleStarStyle(starNum);
}

async function submitReview () {
    const review = document.querySelector('#review-input').value || 'book was fluff';
    const newReview = {"rating": rating, "product_id": 1, "description": review};
    await sendData(urls.reviews, newReview);
    addReviewToDom(newReview);
    reviewCt ++;
    reviewSum += rating;
    calculateReviewAvg()
    toggleModal();
    document.querySelector('#review-input').value = '';
    stars.forEach(star => {
        star.classList.remove('fas');
        addStarEvents(star);
    });
    console.log(reviewAvg);
    console.log(reviewCt);
    console.log(reviewSum);
    avgReview.textContent = reviewAvg;
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

function createDomReviewSpan (reviewObj) {
    const reviewSpan = document.createElement('span');
    reviewSpan.textContent = reviewObj.rating;
    reviewSpan.className = 'review-score';
    return reviewSpan;
}

function createDomReviewP (reviewObj) {
    const reviewP =  document.createElement('p');
    reviewP.textContent = reviewObj.description;
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

