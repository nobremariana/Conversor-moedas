const convertButton = document.querySelector(".convertButton")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const dolarToday = 5.2

    const convertedValues = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue

    console.log(convertValues)
}

convertButton.addEventListener("click", convertValues)
