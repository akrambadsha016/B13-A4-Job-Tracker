

const rejectedSectionCards = document.getElementById('cards');
document.getElementById('rejected-section').addEventListener('click', function () {
    document.getElementById('all-section').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('interview-section').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';

    const cards = document.querySelectorAll('#cards .card')
    let found = false;
    cards.forEach(card => {
        const foundText = card.querySelector('.notApplied').innerText.trim();
        if (foundText === 'Rejected') {
            card.classList.remove('hidden');
            found = true;
        }
        else {
            card.classList.add('hidden');
        }
    })
    if (!found) {
        document.getElementById('no-jobs').classList.remove('hidden');
    }
    else {
        document.getElementById('no-jobs').classList.add('hidden');
    }
    sectionJobs('rejected');
})

// card button1
const rejectButton1 = document.getElementById('rejected1');
const notAppliedTextRejected1 = document.getElementById('notApplied1');
rejectButton1.addEventListener('click', function () {
    notAppliedTextRejected1.innerText = 'Rejected';
    notAppliedTextRejected1.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button2
const rejectButton2 = document.getElementById('rejected2');
const notAppliedTextRejected2 = document.getElementById('notApplied2');
rejectButton2.addEventListener('click', function () {
    notAppliedTextRejected2.innerText = 'Rejected';
    notAppliedTextRejected2.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button3
const rejectButton3 = document.getElementById('rejected3');
const notAppliedTextRejected3 = document.getElementById('notApplied3');
rejectButton3.addEventListener('click', function () {
    notAppliedTextRejected3.innerText = 'Rejected';
    notAppliedTextRejected3.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button4
const rejectButton4 = document.getElementById('rejected4');
const notAppliedTextRejected4 = document.getElementById('notApplied4');
rejectButton4.addEventListener('click', function () {
    notAppliedTextRejected4.innerText = 'Rejected';
    notAppliedTextRejected4.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button5
const rejectButton5 = document.getElementById('rejected5');
const notAppliedTextRejected5 = document.getElementById('notApplied5');
rejectButton5.addEventListener('click', function () {
    notAppliedTextRejected5.innerText = 'Rejected';
    notAppliedTextRejected5.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button6
const rejectButton6 = document.getElementById('rejected6');
const notAppliedTextRejected6 = document.getElementById('notApplied6');
rejectButton6.addEventListener('click', function () {
    notAppliedTextRejected6.innerText = 'Rejected';
    notAppliedTextRejected6.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button7
const rejectButton7 = document.getElementById('rejected7');
const notAppliedTextRejected7 = document.getElementById('notApplied7');
rejectButton7.addEventListener('click', function () {
    notAppliedTextRejected7.innerText = 'Rejected';
    notAppliedTextRejected7.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button8
const rejectButton8 = document.getElementById('rejected8');
const notAppliedTextRejected8 = document.getElementById('notApplied8');
rejectButton8.addEventListener('click', function () {
    notAppliedTextRejected8.innerText = 'Rejected';
    notAppliedTextRejected8.className = 'notApplied font-semibold text-sm text-[#EF4444] border-[#EF4444] border-1 w-fit mb-2 px-3 py-2 rounded';
});
