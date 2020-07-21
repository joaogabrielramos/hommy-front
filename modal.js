const login = document.querySelector("#login a")
const modal = document.querySelector("#modal")
const close = document.querySelector(".header a")

login.addEventListener("click",()=>{
    modal.classList.remove("hide")
})

close.addEventListener("click",()=>{
    modal.classList.add("hide")
})