const handler = (searchName) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchName}`)
        .then(rep => rep.json())
        .then(data => displayMobile(data.data))
}


function displayMobile(data) {
    const productContainer = document.getElementById('card-container');
    productContainer.innerHTML = '';

    // show more hide and show
    if (data.length >12){
        document.getElementById('showMore').classList.remove('hidden')
    }else{
        document.getElementById('showMore').classList.add('hidden');
    }

    // show only first 12 items
    data = data.slice(0, 12);
    data.forEach(element => {
        // card create
        const card = document.createElement('div');

        // card inner html set
        card.innerHTML = `
        <div class="card card-compact  bg-base-100 shadow-xl p-5 border border-gray-300">
        <figure class="my-7"><img class="w-48 " src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class=" text-2xl font-bold text-[#403F3F] my-3 text-center">${element.phone_name}</h2>
          <p class="text-xl text-gray-700">There are many variations of passages of available, but the majority have suffered</p>
          <h1 class="text-3xl my-3 text-[#403F3F] font-bold">$<span>999</span></h1>
          <div class="card-actions justify-center">
            <button class="px-6 py-2 bg-blue-500 rounded-lg text-xl text-white font-medium">Show Details</button>
          </div>
        </div>
      </div>

        `
        // set card in container
        productContainer.appendChild(card)


    });

     // loadingSpinner of
     loadingSpinner(false);
}


function searchHandler(){
    // loadingSpinner on
    loadingSpinner(true);

    const searchValue = document.getElementById('searchinput').value;
    console.log(searchValue)
    handler(searchValue);
}


// loadingSpinner control
const loadingSpinner = (isLoading) =>{
    const spinner = document.getElementById('loading-spinner');
    if (isLoading){
        spinner.classList.remove('hidden')
    }else{
        spinner.classList.add('hidden')
    }
}

