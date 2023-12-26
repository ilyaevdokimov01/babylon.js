function openModal() {
    let modal = document.getElementsByClassName("modal")[0];
    let background = document.getElementsByClassName("background")[0];
  
    modal.classList.add("modal-active");
    background.classList.add("background-active");
  
    document.body.classList.add("hide-scrollbar");
  }
  
  function closeModal() {
    let modal = document.getElementsByClassName("modal")[0];
    let background = document.getElementsByClassName("background")[0];
  
    modal.classList.remove("modal-active");
    background.classList.remove("background-active");
  
    document.body.classList.remove("hide-scrollbar");
  }