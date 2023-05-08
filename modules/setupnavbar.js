const listMenu = document.getElementById('list-menu');
const addNewMenu = document.getElementById('add-new-menu');
const contactMenu = document.getElementById('contact-menu');

const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new-section');
const contactSection = document.getElementById('contact-section');

function hideAllSections() {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
}

listMenu.addEventListener('click', () => {
  hideAllSections();
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
  addNewMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

addNewMenu.addEventListener('click', () => {
  hideAllSections();
  addNewSection.style.display = 'block';
  addNewMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

contactMenu.addEventListener('click', () => {
  hideAllSections();
  contactSection.style.display = 'block';
  contactMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  addNewMenu.classList.remove('active-menu');
});

export default function initNavBar() {
  hideAllSections();
  listSection.style.display = 'block';
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
}
