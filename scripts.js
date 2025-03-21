function injectImage1() {
  // Create an image element
  const img = document.createElement("img")

  // Set the image source and alt text
  img.src =
    "https://archives.bulbagarden.net/media/upload/thumb/2/26/0258Mudkip.png/500px-0258Mudkip.png"
  img.alt = "Mudkip"

  // Find the target div and add the image to it
  const container = document.getElementById("right-panel")

  container.innerHTML = '';
  container.appendChild(img)
}

function displayText1() {

  var text = document.getElementById("textField1");
  text.style.display = "block";
  const container = document.getElementById("description")
  container.innerHTML = '';
  container.appendChild(text)
}

function injectImage2() {
  // Create an image element
  const img = document.createElement("img")

  // Set the image source and alt text
  img.src =
    "https://archives.bulbagarden.net/media/upload/thumb/b/ba/0393Piplup.png/500px-0393Piplup.png"
  img.alt = "Piplup"

  // Find the target div and add the image to it
  const container = document.getElementById("right-panel")

  container.innerHTML = '';
  container.appendChild(img)
}
function displayText2() {

  var text = document.getElementById("textField2");
  text.style.display = "block";
  const container = document.getElementById("description")
  container.innerHTML = '';
  container.appendChild(text)
}

function injectImage3() {
  console.log('2')
  // Create an image element
  const img3 = document.createElement("img")

  // Set the image source and alt text
  img3.src =
    "https://archives.bulbagarden.net/media/upload/thumb/e/e2/0906Sprigatito.png/500px-0906Sprigatito.png"
  img3.alt = "Sprigatito"

  // Find the target div and add the image to it
  const container = document.getElementById("right-panel")

  container.innerHTML = '';
  container.appendChild(img3)
}
function displayText3() {

  var text = document.getElementById("textField3");
  text.style.display = "block";
  const container = document.getElementById("description")
  container.innerHTML = '';
  container.appendChild(text)
}
