var currentImageIndex = 0;
var images;

function openImageGallery(imageList) {
    images = imageList;

    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<span class="close" onclick="closeModal()">&times;</span>';
    modal.innerHTML += '<img src="' + images[currentImageIndex] + '" alt="Ampliación de la imagen" class="modal-content">';
    modal.innerHTML += '<span class="prev" onclick="changeImage(-1)">&#10094;</span>';
    modal.innerHTML += '<span class="next" onclick="changeImage(1)">&#10095;</span>';
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleKeyPress);

    function closeModal() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
        document.removeEventListener('keydown', handleKeyPress);
    }

    modal.onclick = function (event) {
        if (event.target.className === 'modal') {
            closeModal();
        }
    };
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    var modalContent = document.querySelector('.modal-content');
    modalContent.src = images[currentImageIndex];
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeModal();
    }
}

