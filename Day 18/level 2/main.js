// Print out all the cat names in to catNames variable.

const url = 'https://api.thecatapi.com/v1/breeds'

const fetchCat = async() => {
    try {
        const response = await  fetch(url)
        const cats = await response.json()

        // console.log(cats);

        let catNames = []
        for (const cat of cats) {
            catNames.push(cat.name)
        }
        console.log(`Cats' names\n\n${catNames.join(`, `)}`)

        // console.log(`%cCats' names%c \n%c${catNames.join(`, `)}%c`,`text-decoration:underline`,``,`color:green`)
        // console.log(`Cats' names\n${catNames.sort().join(`, `)}`)
    } catch (error) {
        console.log(error);
    }
}

//call
fetchCat()