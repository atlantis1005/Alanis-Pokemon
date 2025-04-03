//create a JSON for pokemon data

const pokemonData = {
  mudkip: {
    imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/2/26/0258Mudkip.png/500px-0258Mudkip.png",
    alt: "Mudkip",
    description: "The fin on Mudkip's head acts as highly sensitive radar. Using this fin to sense movements of water and air,this Pokémon can determine what is taking place around it without using its eyes."
  },
  piplup: {
    imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/b/ba/0393Piplup.png/500px-0393Piplup.png",
    alt: "Piplup",
    description: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
  },
  sprigatito: {
    imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/e/e2/0906Sprigatito.png/500px-0906Sprigatito.png",
    alt: "Sprigatito",
    description: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun."
  }
}

function injectImage(button) {
  // Create an image element
  const img = document.createElement("img")

  //get data-pokemon attribute from button
  const pokemon = button.dataset.pokemon

  //look up matching pokemon key

  const pokeData = pokemonData[pokemon]

  // Set the image source and alt text
  img.src = pokeData.imageUrl
  img.alt = pokeData.alt

  // Find the target div and add the image to it
  const container = document.getElementById("right-panel")

  container.innerHTML = '';
  container.appendChild(img)
}
//function for description
function displayText(button) {

  const text = document.createElement('p');
  text.style.display = "block";
  const pokemon = button.dataset.pokemon
  const pokeData = pokemonData[pokemon]
  text.textContent = pokeData.description
  const container = document.getElementById("description")
  container.innerHTML = '';
  container.appendChild(text)
}


