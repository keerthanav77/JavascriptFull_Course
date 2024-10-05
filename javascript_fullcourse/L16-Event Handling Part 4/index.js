window.addEventListener('resize',()=>{
    const dimensions = `window dimensions:${window.innerWidth}px x  ${Window.innerHeight}px`;
    document.getElementById('dimensions').textContent=dimensions;
});

window.addEventListener('load',()=>{
    console.log('Window loaded');
});

window.addEventListener('scroll',()=>{
    console.log(`Window Scrolled`);
});