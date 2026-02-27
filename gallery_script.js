const imgegallery = [ 
    "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502228362178-086346ac6862?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "linhttps://images.unsplash.com/photo-1644460124859-fed7a554bd3d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const imageElememnt = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextbutton = document.getElementById('next-btn');

let currentimageindex = 0;

function updateImage() {
    imageElememnt.src = imgegallery[currentimageindex];
}

updateImage();

nextbutton.addEventListener('click', function() {

currentimageindex = (currentimageindex +1) % imgegallery.length;
updateImage(); 
});
