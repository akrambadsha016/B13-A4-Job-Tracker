
function statusChangeBadge() {

    const allActiveButton = document.getElementById('all-section').classList.contains('bg-[#3B82F6]');
    const interviewActiveButton = document.getElementById('interview-section').classList.contains('bg-[#3B82F6]');
    const rejectActiveButton = document.getElementById('rejected-section').classList.contains('bg-[#3B82F6]');

    if (allActiveButton) {
        document.getElementById('all-section').click();
    }
    else if (interviewActiveButton) {
        document.getElementById('interview-section').click();
    }
    else if (rejectActiveButton) {
        document.getElementById('rejected-section').click();
    }
}
