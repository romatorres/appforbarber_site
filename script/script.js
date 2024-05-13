function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[92px]'), list.classList.add('md:top-[110px]'), list.classList.add("opacity-100") ) 
    : (e.name = "menu", list.classList.remove('top-[92px]'), list.classList.remove('md:top-[110px]'), list.classList.remove("opacity-100") )  
}