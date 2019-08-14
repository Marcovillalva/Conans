// let container = document.querySelector('.line');




// const clika = () =>{

//     let aster = '*';
//     for(i = 0; i < 10; i++){
//         console.log(aster.repeat(i));
//         container.innerHTML = container.innerHTML + `<p>${aster.repeat(i)}</p>`;
//         //alert('no mames');
//     };

// };



const fetchData = async () => {
    try{
        let res = await fetch('https://rickandmortyapi.com/api/character/')
        return await res.json()
    } catch(e){
        console.log(e)
    }
        
}

const init = async () => {
    let container = document.querySelector('.line');
    let data = await fetchData();
    data.results.map(character => {
        container.innerHTML += `<div>
        <h1>${character.name}</h1>
        <p><img src="${character.image}"></p>
        </div>`
    })
}

init();