
const interviewSectionCards = document.getElementById('cards');
document.getElementById('interview-section').addEventListener('click', function () {

    document.getElementById('all-section').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-section').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';

    const cards = document.querySelectorAll('#cards .card')
    let found = false;
    cards.forEach(card => {
        const foundText = card.querySelector('.notApplied').innerText.trim();
        if (foundText === 'Interview') {
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
    sectionJobs('interview');
})

// card button1
const interviewButton1 = document.getElementById('interview1');
const notAppliedTextInterview1 = document.getElementById('notApplied1');
interviewButton1.addEventListener('click', function () {
    notAppliedTextInterview1.innerText = 'Interview';
    notAppliedTextInterview1.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button2
const interviewButton2 = document.getElementById('interview2');
const notAppliedTextInterview2 = document.getElementById('notApplied2');
interviewButton2.addEventListener('click', function () {
    notAppliedTextInterview2.innerText = 'Interview';
    notAppliedTextInterview2.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button3
const interviewButton3 = document.getElementById('interview3');
const notAppliedTextInterview3 = document.getElementById('notApplied3');
interviewButton3.addEventListener('click', function () {
    notAppliedTextInterview3.innerText = 'Interview';
    notAppliedTextInterview3.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button4
const interviewButton4 = document.getElementById('interview4');
const notAppliedTextInterview4 = document.getElementById('notApplied4');
interviewButton4.addEventListener('click', function () {
    notAppliedTextInterview4.innerText = 'Interview';
    notAppliedTextInterview4.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button5
const interviewButton5 = document.getElementById('interview5');
const notAppliedTextInterview5 = document.getElementById('notApplied5');
interviewButton5.addEventListener('click', function () {
    notAppliedTextInterview5.innerText = 'Interview';
    notAppliedTextInterview5.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button6
const interviewButton6 = document.getElementById('interview6');
const notAppliedTextInterview6 = document.getElementById('notApplied6');
interviewButton6.addEventListener('click', function () {
    notAppliedTextInterview6.innerText = 'Interview';
    notAppliedTextInterview6.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button7
const interviewButton7 = document.getElementById('interview7');
const notAppliedTextInterview7 = document.getElementById('notApplied7');
interviewButton7.addEventListener('click', function () {
    notAppliedTextInterview7.innerText = 'Interview';
    notAppliedTextInterview7.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});

// card button8
const interviewButton8 = document.getElementById('interview8');
const notAppliedTextInterview8 = document.getElementById('notApplied8');
interviewButton8.addEventListener('click', function () {
    notAppliedTextInterview8.innerText = 'Interview';
    notAppliedTextInterview8.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
});
