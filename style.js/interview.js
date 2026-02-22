const interviewBtnCards = document.getElementById('cards');
document.getElementById('interview-btn').addEventListener('click', function(){

    document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';

    const cards = document.querySelectorAll('#cards .card');
    let found = false;
    cards.forEach(card => {
        const foundText = card.querySelector('.notApplied').innerText.trim();
        if(foundText === 'Interview'){
            card.classList.remove('hidden');
            found = true;
        }
        else {
            card.classList.add('hidden');
        }
    })

    if(!found){
        document.getElementById('no-jobs').classList.remove('hidden');
    }
    else {
        document.getElementById('no-jobs').classList.add('hidden');
    }

})

const interview1Btn = document.getElementById('interview1');
const notAppliedText1 = document.getElementById('not-applied1');
interview1Btn.addEventListener('click', function(){
    notAppliedText1.innerText = 'Interview';
    notAppliedText1.className = 'notApplied font-semibold text-sm text-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const interview2Btn = document.getElementById('interview2');
const notAppliedText2 = document.getElementById('not-applied2');
interview2Btn.addEventListener('click', function(){
    notAppliedText2.innerText = 'Interview';
    notAppliedText2.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

const interview3Btn = document.getElementById('interview3');
const notAppliedText3 = document.getElementById('not-applied3');
interview3Btn.addEventListener('click', function(){
    notAppliedText3.innerText = 'Interview';
    notAppliedText3.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const interview4Btn = document.getElementById('interview4');
const notAppliedText4 = document.getElementById('not-applied4');
interview4Btn.addEventListener('click', function(){
    notAppliedText4.innerText = 'Interview';
    notAppliedText4.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const interview5Btn = document.getElementById('interview5');
const notAppliedText5 = document.getElementById('not-applied5');
interview5Btn.addEventListener('click', function(){
    notAppliedText5.innerText = 'Interview';
    notAppliedText5.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const interview6Btn = document.getElementById('interview6');
const notAppliedText6 = document.getElementById('not-applied6');
interview6Btn.addEventListener('click', function(){
    notAppliedText6.innerText = 'Interview';
    notAppliedText6.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const interview7Btn = document.getElementById('interview7');
const notAppliedText7 = document.getElementById('not-applied7');
interview7Btn.addEventListener('click', function(){
    notAppliedText7.innerText = 'Interview';
    notAppliedText7.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
const interview8Btn = document.getElementById('interview8');
const notAppliedText8 = document.getElementById('not-applied8');
interview8Btn.addEventListener('click', function(){
    notAppliedText8.innerText = 'Interview';
    notAppliedText8.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});