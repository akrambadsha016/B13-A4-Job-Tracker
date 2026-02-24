

function interviewButton(button) {
    
    const interviewCard = button.parentNode.parentNode.parentNode;
    const interviewBadge = interviewCard.querySelector('.notApplied');
    const newInterviewStatus = interviewBadge.innerText.trim();

    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCount = parseInt(interviewCounter.innerText);
    let rejectCount = parseInt(rejectCounter.innerText);

    
    const totalJob = document.querySelectorAll('#cards .card').length;
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

  
    if (newInterviewStatus === 'Interview') {
        return;
    }
    else if (newInterviewStatus === 'Rejected') {
        rejectCount--;
        rejectCounter.innerHTML = rejectCount;
    }
    interviewCount++;
    interviewCounter.innerHTML = interviewCount;
    interviewBadge.innerText = 'Interview';
    interviewBadge.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
    statusChangeBadge();
}


function rejectButton(button) {
    const rejectCard = button.parentNode.parentNode.parentNode;
    const rejectBadge = rejectCard.querySelector('.notApplied');
    const newRejectStatus = rejectBadge.innerText.trim();

    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCount = parseInt(rejectCounter.innerText);
    let interviewCount = parseInt(interviewCounter.innerText);

  
    const totalJob = document.querySelectorAll('#cards .card').length;
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

 
    if (newRejectStatus === 'Rejected') {
        return;
    }
    else if (newRejectStatus === 'Interview') {
        interviewCount--;
        interviewCounter.innerHTML = interviewCount;
    }
    rejectCount++;
    rejectCounter.innerHTML = rejectCount;
    rejectBadge.innerText = 'Rejected';
    rejectBadge.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded'
    statusChangebadge();
}
