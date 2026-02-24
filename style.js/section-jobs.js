
function sectionJobs(job) {
    if (job === 'all') {
        document.getElementById('sectionJob').innerText = document.getElementById('jobs').innerText;
    }
    else if (job === 'interview') {
        document.getElementById('sectionJob').innerText = document.getElementById('interviewCounter').innerText;
    }
    else if (job === 'rejected') {
        document.getElementById('sectionJob').innerText = document.getElementById('rejectCounter').innerText;
    }
}
