// Attach reviewData to the global window Object
// so other scripts can access it at runtime.

window.reviewData = [
    {
        name: "Daniel Magic",
        date: "23/03/2018",
        rating: 5,
        review: "It's my favourite Game, I love it!"
    },
    {
        name: "James Okson",
        date: "06/12/2021",
        rating: 2,
        review: "I played it once but it was boring"
    },
    {
        name: "Jassie J",
        date: "09/08/2020",
        rating: 5,
        review: "Played it with my kid and she was so excited!"
    },
    {
        name: "Mike Jay",
        date: "12/2/2023",
        rating: 5,
        review: "We played it with our friends yesterday and it was so much fun!!!"
    },
    {
        name: "Jonney Kim",
        date: "03/11/2020",
        rating: 3,
        review: "It's okay but nothing extraordinary"
    },
];

const { reviewData } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ reviewData }, "App Data");



function listReviews() {

    let card = document.getElementById('card');

    for (let i = 0; i < reviewData.length; i++) {
        const article = createReview(i);
        card.appendChild(article);
    }

    //When the button is clicked?????????????????????????????
    let submit = document.getElementById('f_i_submit'); //get submit

    submit.addEventListener("click", function () {
        let name = document.getElementById('f_i_name').value; //get FullName
        let date = new Date(); //date
        let rating = document.getElementById('f_i_rating').value; //get rating
        let review = document.getElementById('f_i_comment').value; //get review

        let card = document.getElementById('card');
        card.innerHTML = "";

        reviewData[reviewData.length] = { name, date, rating, review };

        for (let i = 0; i < reviewData.length; i++) {
            const article = createReview(i);
            card.appendChild(article);
        }

    });


}

function createReview(index) {
    //article
    const article = document.createElement('article');
    article.classList.add('card-article');

    //name
    const name = document.createElement('h3');
    name.textContent = reviewData[index].name;
    name.classList.add('card-name');
    article.appendChild(name);

    //date
    const date = document.createElement('time');
    date.textContent = reviewData[index].date;
    date.classList.add('card-time');
    article.appendChild(date);

    const breakP = document.createElement('br');
    article.appendChild(breakP);

    //rating - creating stars (with filled and unfilled classLists)
    const star = document.createElement('span');
    star.innerHTML = "";

    for (let i = 0; i < 5; i++) //5 number of stars in raiting
    {
        if (reviewData[index].rating > i) { //filled star
            star.innerHTML += '&#9733;'
        }
        else { //unfilled star
            star.innerHTML += '&#9734;'
        }
    }
    star.classList.add('star');
    article.appendChild(star);

    //review
    const review = document.createElement('h5');
    review.textContent = reviewData[index].review;
    review.classList.add('card-review');
    article.appendChild(review);

    return article;
}





//Event Handler
window.onload = function () {
    listReviews();
}













