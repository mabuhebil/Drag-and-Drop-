const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => { item.classList.add('dragg') }, 0)
    })
    item.addEventListener("dragend", () => {
        item.classList.remove('dragg')
    })
})