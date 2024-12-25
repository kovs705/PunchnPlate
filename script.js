const headings = document.querySelectorAll('.hover-effect');

headings.forEach(heading => {
    heading.addEventListener('mouseover', () => {
        console.log(`${heading.textContent} hovered!`);
    });
});
