let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id){
  
  allFilterBtn.classList.add('bg-gray-300', 'text-primary');
  interviewFilterBtn.classList.add('bg-gray-300', 'text-primary');
  rejectedFilterBtn.classList.add('bg-gray-300', 'text-primary'); 
  
  allFilterBtn.classList.remove('bg-primary', 'text-white');
  interviewFilterBtn.classList.remove('bg-primary', 'text-white');
  rejectedFilterBtn.classList.remove('bg-primary', 'text-white');

  const selected = document.getElementById(id);

  selected.classList.remove('bg-gray-300', 'text-primary');
  selected.classList.add('bg-primary', 'text-white');
}

mainContainer.addEventListener('click', function(event){
  const parentNode = event.target.parentNode.parentNode;
  const mobileCrop = parentNode.querySelector('.mobileCrop').innerText;
  const rectDev = parentNode.querySelector('.rectDev').innerText 
 
  // const webAgency = parentNode.querySelector('.webAgency').innerText;
  // const webDesign = parentNode.querySelector('.webDesign').innerText;

  // const dataSolutions  = parentNode.querySelector('.dataSolutions').innerText;
  // const dataSpecialist = parentNode.querySelector('.dataSpecialist').innerText;

  // const cloudFirst = parentNode.querySelector('.cloudFirst').innerText;
  // const backendDev = parentNode.querySelector('.backendDev').innerText;

  // const labInno = parentNode.querySelector('.labInno').innerText;
  // const uiEng = parentNode.querySelector('.uiEng').innerText;

  // const megaCrop  = parentNode.querySelector('.megaCrop').innerText;
  // const devJava = parentNode.querySelector('.devJava').innerText
  // ;
  // const startUp = parentNode.querySelector('.startUp').innerText;
  // const stackEng = parentNode.querySelector('.stackEng').innerText;

  // const techCrop = parentNode.querySelector('.techCrop').innerText;
  // const frontDev = parentNode.querySelector('.frontDev').innerText;


  console.log(mobileCrop, rectDev);
  // console.log(mobileCrop, rectDev, webAgency, webDesign, dataSolutions, dataSpecialist, cloudFirst, backendDev, labInno, uiEng, megaCrop,devJava, startUp, stackEng, techCrop, frontDev);
})