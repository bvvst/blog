let promises = []

for (let i = 1; i < 906; i++) {
    let a = new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()).then(resolve).catch(reject);
      });
      promises.push(a)
}

Promise.all(promises)
  .then((results) => {
    for (mon of results) {
        let pokeNode = document.createElement("div")
        let image = document.createElement("img")
        image.src = mon.sprites.front_default
        image.className = "sprite"
        pokeNode.append(image)

        let text = document.createElement("span")
        text.innerText = mon.name

        pokeNode.append(text)
        
        pokeNode.className = "container"

        document.getElementById("list").append(pokeNode)
    }
  });