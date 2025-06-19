// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function getPosts() {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
    .then(response => response.json())
    .then((json) => {
        // {
        //     "name": "Adeel Solangi",
        //     "language": "Sindhi",
        //     "id": "V59OF92YF627HFY0",
        //     "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
        //     "version": 6.1
        //   },
        console.log(json)
    })
}
