const body = document.querySelector('#body-id')
const darkButton = document.querySelector('#darkButton-id')

darkButton.addEventListener(
    "click",
    () => {
        body.style.backgroundColor = "gray"
    }
)