const addReviewBtn = document.querySelector('#add-review-btn');

addReviewBtn.addEventListener('click', toggleHiding);

function toggleHiding () {
    let modal = document.querySelector('.modal-ctn');
    modal.classList.toggle('hidden');
}






