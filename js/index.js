document.getElementsByClassName("addStation")[0].addEventListener("click", toggleModal);
document.getElementsByClassName("modal__overlay")[0].addEventListener("click", toggleModal);

function toggleModal(){
	let modalbg = document.getElementsByClassName('modal__overlay')[0];
    let modal = document.getElementsByClassName('modal__box')[0];
    let modalContainer = document.getElementsByClassName('modal')[0];
    modalContainer.classList.toggle('modal__containerActive');
	modalbg.classList.toggle('modal__BgActive');
    modal.classList.toggle('modal__Active');
    
}