// Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input[type=date]').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=AAGCIJ4hV3MmD65w1QEyJ4W7ssqina2lb2HHty3W&date=${choice}`

// Elements
const imgElement = document.querySelector('img');
const iframeElement = document.querySelector('iframe');
const explanationElement = document.querySelector('h3');

// Clear previous media
imgElement.style.display = 'none';
iframeElement.style.display = 'none';
imgElement.src = '';
iframeElement.src = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        explanationElement.innerText = data.explanation

        if(data.media_type === "image"){
          imgElement.src = data.hdurl // set img srs
          imgElement.style.display = 'block' //display image

        }else if(data.media_type === "video"){
          iframeElement.src = data.url // set iframe src for video
          iframeElement.style.display = 'block' // display iframe
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          explanationElement.innerText = 'Failed to fetch data. Please try again later.'
      });
}



//make it look waaaaayyy better. make this your own.
//look on NASA api website - they have sooo many other apis