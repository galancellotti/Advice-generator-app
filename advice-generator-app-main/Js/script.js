const rice = document.querySelector(".icon_dice_container")
const advicecontainer = document.getElementById("text__container")
const idadvice = document.getElementById("advice")


async function getAdvice() {
    const buscaapi = await fetch('https://api.adviceslip.com/advice')
    const conselho = await buscaapi.json();
    console.log(conselho)

    return conselho;
}

getAdvice();

const showApi = async () => {
    const conselho = await getAdvice();
    idadvice.textContent = `ADVICE  # ${conselho.slip.id}`
    advicecontainer.textContent = `"${conselho.slip.advice}"`
}

rice.addEventListener('click', async () => {
    await showApi();
})
















/* async function getAdvice() {
    const buscaapi = await fetch('https://api.adviceslip.com/advice');
    const conselho = await buscaapi.json();
    console.log(conselho)

    return conselho;
}

getAdvice();

const showApi = async () => {
    const conselho = await getAdvice();
    idadvice.innerText = `Advice # ${conselho.slip.id}`;
    advicecontainer.innerText = `"${conselho.slip.advice}"`;
}


rice.addEventListener('click', async () => {
    await showApi();
}); */

