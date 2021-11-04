
window.addEventListener('mousemove', e => {
    const gradientBg = document.getElementById('crazy-gradient');
    let mouseXpercentage = Math.round(e.pageX / window.innerWidth * 100);
    let mouseYpercentage = Math.round(e.pageY / window.innerHeight * 100);
    gradientBg.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ffffff, #FCBBE3)';
});

