const totalJob = 8;

function interviewButton(button){
    const interviewCard = button.closest('.card');
    const interviewBadge = interviewCard.querySelector('.notApplied');
    const interviewUpdateBadge = interviewBadge.innerText.trim();

    let interviewCount = document.getElementById('interview-count');
    let rejectedCount = document.getElementById('rejected-count');
    let totalInterviewCount = parseInt(interviewCount.innerText, 0);
    let totalRejectedCount = parseInt(rejectedCount.innerText, 0);

    if(totalInterviewCount + totalRejectedCount >= totalJob){
        return;
    }

    if(interviewUpdateBadge === 'Interview'){
        return;
    }
    else if(interviewUpdateBadge === 'Rejected'){
        totalRejectedCount--;
        rejectedCount.innerHTML = totalRejectedCount;
    }
    totalInterviewCount++;
    interviewCount.innerHTML = totalInterviewCount;
}

function rejectedButton(button){
    const rejectedCard = button.closest('.card');
    const rejectedBadge = rejectedCard.querySelector('.notApplied');
    const rejectedUpdateBadge = rejectedBadge.innerText.trim();

    let rejectedCount = document.getElementById('rejectedCount');
    let interviewCount = document.getElementById('interviewCount');
    let totalRejectedCount = parseInt(rejectedCount.innerText, 0);
    let totalInterviewCount = parseInt(interviewCount.innerText, 0);

    if(totalInterviewCount + totalRejectedCount >= totalJob){
        return;
    }
    if(rejectedUpdateBadge === 'Rejected'){
        return;
    }
    else if(rejectedUpdateBadge === 'Interview'){
        totalInterviewCount--;
        interviewCount.innerHTML = totalInterviewCount;
    }
    totalRejectedCount++;
    rejectedCount.innerHTML = totalRejectedCount;
}


  

