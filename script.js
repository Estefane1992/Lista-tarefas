const addForm = document.querySelector('.add');
const list = document.querySelector('.todasListas');
const search = document.querySelector('.search input');

const gerarTemplate = todaLista => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-white fw-bolder">
        <span>${todaLista}</span>
        <i class="bi bi-trash"></i>
        </li>`;
    list.innerHTML += html;
}
// add nova lista
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todaLista = addForm.add.value.trim();
    if(todaLista.length){
        gerarTemplate(todaLista);
        addForm.reset();
    }
});
// deleta lista
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
// metodo  keyup (O keyup() é um método embutido no jQuery que é usado para acionar o evento keyup sempre que o usuário solta uma tecla do teclado. Portanto, usando o método keyup(), podemos detectar se alguma tecla é liberada do teclado.)
const filtrarLista = (termo) => {
    Array.from(list.children)
    .filter((todaLista) => !todaLista.textContent.toLowerCase().includes(termo))
    .forEach((todaLista) => todaLista.classList.add('filtrada'));

    Array.from(list.children)
    .filter((todaLista) => todaLista.textContent.toLowerCase().includes(termo))
    .forEach((todaLista) => todaLista.classList.remove('filtrada'));
    
    
};
search.addEventListener('keyup', () => {
    const termo = search.value.trim().toLowerCase();
    filtrarLista(termo);
});