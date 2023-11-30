// Array para almacenar los comentarios
const comments = [];
document.addEventListener('DOMContentLoaded', function () {
    const zoomImages = document.querySelectorAll('.zoom-image');
    zoomImages.forEach(image => {
        image.addEventListener('mouseenter', function () {
            this.classList.add('zoomed');
        });
        image.addEventListener('mouseleave', function () {
            this.classList.remove('zoomed');
        });
    });

    const addCommentButton = document.getElementById('add-comment-btn');
    addCommentButton.addEventListener('click', function () {
        const username = document.getElementById('comment-username').value;
        const commentText = document.getElementById('comment-text').value;

        if (username && commentText) {
            const comment = {
                username: username,
                text: commentText
            };

            // Agregar el comentario al array de comentarios
            comments.push(comment);

            // Limpiar campos de entrada
            document.getElementById('comment-username').value = '';
            document.getElementById('comment-text').value = '';

            // Mostrar comentarios actualizados
            displayComments();
        } else {
            alert('Por favor, completa ambos campos antes de agregar un comentario.');
        }
    });

    // Mostrar comentarios al cargar la página
    displayComments();
});
// Función para mostrar los comentarios en la página
function displayComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = `${comment.username}: ${comment.text}`;
        commentsList.appendChild(li);
    });
}

