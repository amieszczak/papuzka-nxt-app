export default function carouselMovement() {
    const carouselTrack = document.querySelector('.carousel-track');
    let initialPosition = null;

    window.addEventListener('mousedown', (e) => {
        initialPosition = e.pageX;
    });

    window.addEventListener('mousemove', (e) => {
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        track.style.transform = `translateX(${diff}px)`;
    })

}