const shareBtn = document.querySelector('.js-shareBtn');
const sharePopup = document.querySelector('.js-sharePopup');

shareBtn.addEventListener('click', () => {
    let attrValue = sharePopup.getAttribute('data-state');
    sharePopup.setAttribute('data-state', attrValue === 'closed' ? 'active' : 'closed');
});