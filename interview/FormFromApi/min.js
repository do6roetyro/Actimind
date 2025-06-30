// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
}

window.onclick = function(event) {
    if (event.target == modal && modal.classList.contains('is-active')) {
        modal.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
    }
}

function getPosts() {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
    .then(response => response.json())
    .then((json) => {
        const items = json.slice(0, 10);
        
        let modalDataHtml = '';
        
        items.forEach((item, index) => {
            modalDataHtml += `
                <div class="modal-item">
                    <div class="modal-item-title">${index + 1}. ${item.name}</div>
                    <div class="modal-item-details">
                        <strong>Язык:</strong> ${item.language}<br>
                        <strong>ID:</strong> ${item.id}<br>
                        <strong>Версия:</strong> ${item.version}<br>
                        <strong>Биография:</strong> ${item.bio}
                    </div>
                </div>
            `;
        });
        
        const modalData = document.getElementById('modal-data');
        modalData.innerHTML = modalDataHtml;
        
        modal.classList.add('is-active');
        document.body.classList.add('no-scroll');
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function showCards() {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
    .then(response => response.json())
    .then((json) => {
        const items = json.slice(0, 10);
        const cardsContainer = document.getElementById('cards-container');
        
        items.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <div class="card-title">${item.name}</div>
                <div class="card-language">Язык: ${item.language}</div>
                <div class="card-bio">${item.bio}</div>
                <div class="card-id">ID: ${item.id}</div>
            `;
            
            cardsContainer.appendChild(card);
        });
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
