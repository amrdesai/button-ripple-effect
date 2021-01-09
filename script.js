// Variables
const buttons = document.querySelectorAll('.ripple');

// Add event listener to all buttons with ripple class
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // Clicked position
        const x = e.clientX;
        const y = e.clientY;

        // Button position
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // Position inside the button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        // Create a span el
        const circle = document.createElement('span');
        // Add circle class
        circle.classList.add('circle');
        // Position span
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // Remove span after animation is done
        setTimeout(() => circle.remove(), 501);
    });
});
