const allCards = document.getElementById('cards');
document.getElementById('all-section').addEventListener('click', function () {
    document.getElementById('interview-section').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-section').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-8 py-[10px] rounded';
    allCards.classList.remove('hidden');

    const cards = document.querySelectorAll('#cards .card');
    cards.forEach(card => {
        card.classList.remove('hidden');
    })

    document.getElementById('no-jobs').classList.add('hidden');
    sectionJobs('all');
})