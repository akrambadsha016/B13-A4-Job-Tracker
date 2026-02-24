

function deleteData(button) {
    const deleteJob = button.parentNode.parentNode.parentNode;


    const badge = deleteJob.querySelector('.notApplied').innerText.trim();

    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCount = parseInt(interviewCounter.innerText);
    let rejectCount = parseInt(rejectCounter.innerText);
    if (badge === 'Interview') {
        interviewCount--;
        interviewCounter.innerText = interviewCount;
    }
    else if (badge === 'Rejected') {
        rejectCount--;
        rejectCounter.innerText = rejectCount;
    }

    deleteJob.remove();
    jobCounter();
    statusChangeBadge();
}


function jobCounter() {
    const jobCount = document.getElementById('jobs');
    let job = parseInt(jobCount.innerText);

    job--;
    jobCount.innerHTML = job;

    const sectionTotalCount = document.getElementById('sectionTotalJobs');
    let sectionTotal = parseInt(sectionTotalCount.innerText);
    sectionTotal--;
    sectionTotalCount.innerHTML = sectionTotal;

}
