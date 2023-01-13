// Your Code Here

// async function main2(){
//     let response = await fetch('http://localhost:9001/updateBook',{
//         method: "PATCH",
//         header: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify({
//             "id": 3,
//             "title":"Legends of Arathrae",
//         }),
//     });
//     let updateBook = await response.json()
//     console.log(updateBook)
// }

// main2()

async function main() {
    let response = await fetch('http://localhost:3001/listbooks')
    let books = await response.json()
    books.forEach(newBook)
    console.log(books)
}

function newBook(book) {
    console.log(book)
    //book is an object containing variables:id,title,desc,quantity,imgurl,year ...
    let root = document.getElementById('root')

    //make the bullet point for each book entry- use create Element
    let list = document.createElement('li')
    list.innerHTML = book.title
    //add input
    let quantityInput = document.createElement('input')
    //make whatever book.quantity is fill in input
    quantityInput.value = book.quantity
    //make button
    let save = document.createElement('button')
    save.innerHTML = 'Save'
    //action button fetching (updateBook)
    save.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
//             "id": 3,
//             "title":"Legends of Arathrae",
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    //insert content
    list.append(quantityInput, save)
    root.append(list)
}

main()
