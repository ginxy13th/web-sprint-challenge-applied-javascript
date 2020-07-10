// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
//{articles:{javascript:[{article1: headline, authorphoto, authorname}]}}

function cardMaker(object){
    console.log(object)
// object.forEach(obj =>{
    for(let i =0; i < object.length; i++){
    let card = document.createElement('div');
    card.classList.add('card')
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = object[i].headline
        card.appendChild(headline);
        let author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
            author.appendChild(imgContainer);
                let img = document.createElement('img');
                img.src= object[i].authorPhoto;
                imgContainer.appendChild(img);
            let name = document.createElement('span');
            name.textContent = `By ${object[i].authorName}`;
            author.appendChild(name);

    let cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(card);

    return cardsContainer;
}
    
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
   let bootstrap = response.data.articles.bootstrap
   let javascript = response.data.articles.javascript
   let jquery = response.data.articles.jquery
   let node = response.data.articles.node
   let technology = response.data.articles.technology
   cardMaker(bootstrap);
   cardMaker(javascript);
   cardMaker(jquery);
   cardMaker(node);
   cardMaker(technology);
})

.catch(error => {
    console.log('error:', error)})
    
