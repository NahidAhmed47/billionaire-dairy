const allBillionairesData = async() =>{
    const url = 'data/AllBillionaires.json';
    const res = await fetch(url)
    const data = await res.json()
    displayBillionairesData(data)
}
const displayBillionairesData = (data) =>{
    const container = document.getElementById('display-data-container');
    data.slice(0, 150).forEach(info => {
        const div = document.createElement('div');
        div.classList.add('bg-[#0E1B34]', 'h-[270px]', 'p-5', 'rounded', 'flex', 'flex-col', 'justify-between')
        div.innerHTML += `
                <h1 class="text-center text-xl font-bold text-slate-100 mb-4">${info.personName}</h1>
                <div class="flex h-28 gap-2">
                  <img class="w-[45%]" src="${info.person.squareImage}" alt="">
                  <div class="border-l pl-2 flex flex-col justify-center">
                    <h3 class="text-sm font-bold text-slate-200">Citizenship: <span class="text-xs font-semibold text-slate-300">${info.countryOfCitizenship}</span></h3>
                    <h3 class="text-sm font-bold text-slate-200">City: <span class="text-xs font-semibold text-slate-300">${info.city}</span></h3>
                    <h3 class="text-sm font-bold text-slate-200">Rank: <span class="text-xs font-semibold text-slate-300">${info.rank}</span></h3>
                  </div>
                </div>
                <h1 class="text-sm font-bold text-slate-200 mt-2">Source: <span class="text-xs font-semibold text-slate-300">Wikipedia</span></h1>
                <p class="text-xs underline cursor-pointer text-red-500">See details</p>
        `;
        container.appendChild(div);
    })
    loading(false);
}
allBillionairesData()

// loader
const loading = (loading) =>{
    const spinner = document.getElementById('loading-spinner');
    if(loading){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}
