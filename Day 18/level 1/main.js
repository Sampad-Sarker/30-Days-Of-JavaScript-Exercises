/*
1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
*/ 

const url = 'https://restcountries.com/v2/all'

const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    
    
    // console.log(countries)



    let numbering = 0
    for (const country of countries) {
      
        const countryName = country.name
        const countryCapital = country.capital
        const countryLanguages = country.languages
        let languages = []
        for (const language of countryLanguages) {
          languages.push(language.name)
        }
        
        const countryPopulation = country.population
        const countryArea = country.area

        console.log(`${++numbering})country :${countryName}\n capital :${countryCapital}\n languages :${languages}\n population :${countryPopulation}\n area :${countryArea} sq km`)
    }
    
  } catch (err) {
    console.error(err)
  }
}

fetchData()