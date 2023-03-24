
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function GithubCard(img, name, username, location, Profile, followers, following, bio) {
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const anchor = document.createElement('a')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3)
  cardInfo.appendChild(p1)
  cardInfo.appendChild(p2)
  cardInfo.appendChild(p3)
  cardInfo.appendChild(anchor)
  cardInfo.appendChild(p4)
  cardInfo.appendChild(p5)
  cardInfo.appendChild(p6)

  image.src = img;
  h3.textContent = name;
  p1.textContent = username;
  p2.textContent = "Location:" + location;
  anchor.innerHTML = "Profile: " + Profile;
  p4.textContent = "Followers: " + followers;
  p5.textContent = "Following: " + following;
  p6.textContent = "Bio: " + bio;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name')
  p1.classList.add('username')

  return card
}

const cards = document.querySelector(".cards")
axios.get('https://api.github.com/users/abdirahmanahmed1')
  .then(response => {
    // const og=response.data;
    // console.log(og)
    const photo=response.data.avatar_url;
    const magc=response.data.login;
    const username=response.data.name;
    const location=response.data.location;
    const Profile=response.data.url;
    const followers=response.data.followers;
    const following=response.data.following;
    const bio=response.data.bio;
    cards.appendChild(GithubCard(photo,magc,username,location,Profile,followers,following,bio))

  })
  .catch(error =>{
    console.log(error)
  })


  axios.get('https://api.github.com/users/BakarMokhtarAli')
  .then(response => {
    // const og=response.data;
    // console.log(og)
    const photo=response.data.avatar_url;
    const magc=response.data.login;
    const username=response.data.name;
    const location=response.data.location;
    const Profile=response.data.url;
    const followers=response.data.followers;
    const following=response.data.following;
    const bio=response.data.bio;
    cards.appendChild(GithubCard(photo,magc,username,location,Profile,followers,following,bio))

  })
  .catch(error =>{
    console.log(error)
  })


  axios.get('https://api.github.com/users/Duraanali')
  .then(response => {
    // const og=response.data;
    // console.log(og)
    const photo=response.data.avatar_url;
    const magc=response.data.login;
    const username=response.data.name;
    const location=response.data.location;
    const Profile=response.data.url;
    const followers=response.data.followers;
    const following=response.data.following;
    const bio=response.data.bio;
    cards.appendChild(GithubCard(photo,magc,username,location,Profile,followers,following,bio))

  })
  .catch(error =>{
    console.log(error)
  })

/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];

