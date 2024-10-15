function toggle() {
    const extraDiv = document.getElementById('extra');
    const button = document.querySelector('.head .button');

    if (extraDiv.style.display === 'none') {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}
