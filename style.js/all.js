const allCards = document.getElementById('cards')
document.getElementById('all-btn').addEventListener('click', function(){
    document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';
    allCards.classList.remove('hidden');

    const cards = document.querySelectorAll('#cards .card');
    cards.forEach(card => {
        card.classList.remove('hidden');
    })

    document.getElementById('no-jobs').classList.add('hidden');
})
