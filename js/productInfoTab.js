let tabItems = document.querySelector('.info-tab-items');
let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.info-tab-item');
let currentTab = 0;

const handleTabClick = (tabId) => {
  // tabContents.forEach((tabContent, index) => {
  //   tabContent.style.display = 'none';
  // });

  // tabContents[tabId].style.display = 'block';
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  tabs[tabId].classList.add('active');

  currentTab = tabId;

  tabItems.style.transform = `translateX(${tabId * -100}%)`;
};
