// Variables
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Listeners
tabItems.forEach(item => item.addEventListener('click', selectItem));

//Functions
function selectItem(e) {

    removeBorder();
    removeShow();
    //Add a border in the selected item
    this.classList.add('tab-border');

    //Grab just the selected item to display
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    // Display none to the elements
    tabContentItems.forEach(item => item.classList.remove('show'));
}
