let transition = () => {
    const navBarElement = document.querySelector('nav');
    const topContainerElement = document.querySelector('.top-container');
    const positionNav = navBarElement.getBoundingClientRect();
    const positionTopContainer = topContainerElement.getBoundingClientRect();
    const btns = document.querySelectorAll('a')
    const navBot = Math.floor(positionNav.bottom);
    const TopContainerBot = Math.floor(positionTopContainer.bottom);
    if (navBot < TopContainerBot){
        navBarElement.style.backgroundColor = 'white';
        btns.forEach((btn) =>btn.style.color = '#00235B');
    }else {
        navBarElement.style.backgroundColor = '#00235B';
        btns.forEach((btn) =>btn.style.color = 'white');
    }
}
document.addEventListener('scroll',transition)



