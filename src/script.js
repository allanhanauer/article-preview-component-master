const share = document.querySelector('#share')

share.addEventListener('click',(e)=>{
    const boxshare = document.querySelector('#boxshare');
    boxshare.classList.toggle('activate')
})