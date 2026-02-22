const rejectedBtnCards = document.getElementById('cards');
document.getElementById('rejected-btn').addEventListener('click', function(){

    document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';

    const cards =document.querySelectorAll('#cards .card');
    let found = false;
    cards.forEach(card => {
        const foundText = card.querySelector('.notApplied').innerText.trim();
        if(foundText === 'Rejected'){
               card.classList.remove('hidden');
               found = true;
        }
        else{
            card.classList.add('hidden');
        }
    })
    if(!found){
        document.getElementById('no-jobs').classList.remove('hidden');
    }
    else{
        document.getElementById('no-jobs').classList.add('hidden');
    }
    document.getElementById('no-jobs').classList.remove('hidden');
})


const rejected1Btn = document.getElementById('rejected1');
const notAppliedRejected1 = document.getElementById('not-applied1');
rejected1Btn.addEventListener('click', function(){
    notAppliedRejected1.innerText = 'Rejected';
    notAppliedRejected1.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected2Btn = document.getElementById('rejected2');
const notAppliedRejected2 = document.getElementById('not-applied2');
rejected2Btn.addEventListener('click', function(){
    notAppliedRejected2.innerText = 'Rejected';
    notAppliedRejected2.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected3Btn = document.getElementById('rejected3');
const notAppliedRejected3 = document.getElementById('not-applied3');
rejected3Btn.addEventListener('click', function(){
    notAppliedRejected3.innerText = 'Rejected';
    notAppliedRejected3.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected4Btn = document.getElementById('rejected4');
const notAppliedRejected4 = document.getElementById('not-applied4');
rejected4Btn.addEventListener('click', function(){
    notAppliedRejected4.innerText = 'Rejected';
    notAppliedRejected4.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected5Btn = document.getElementById('rejected5');
const notAppliedRejected5 = document.getElementById('not-applied5');
rejected5Btn.addEventListener('click', function(){
    notAppliedRejected5.innerText = 'Rejected';
    notAppliedRejected5.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected6Btn = document.getElementById('rejected6');
const notAppliedRejected6 = document.getElementById('not-applied6');
rejected6Btn.addEventListener('click', function(){
    notAppliedRejected6.innerText = 'Rejected';
    notAppliedRejected6.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const rejected7Btn = document.getElementById('rejected7');
const notAppliedRejected7 = document.getElementById('not-applied7');
rejected7Btn.addEventListener('click', function(){
    notAppliedRejected7.innerText = 'Rejected';
    notAppliedRejected7.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const rejected8Btn = document.getElementById('rejected8');
const notAppliedRejected8 = document.getElementById('not-applied8');
rejected8Btn.addEventListener('click', function(){
    notAppliedRejected8.innerText = 'Rejected';
    notAppliedRejected8.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

