  // JavaScript to toggle the display of additional information
  function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const btnText = document.getElementById('showMoreBtn');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        btnText.innerHTML = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        btnText.innerHTML = 'Show More';
    }
}
