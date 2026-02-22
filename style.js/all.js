const allCards = document.getElementById('cards')
document.getElementById('all-btn').addEventListener('click', function(){
    const interviewBtn = document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    const rejectedBtn = document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';
    allCards.classList.remove('hidden');

    document.getElementById('no-jobs').classList.add('hidden');
})
