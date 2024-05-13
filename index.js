/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length-txt")
const volume = document.getElementById("volume-txt")
const mass = document.getElementById("mass-txt")


const convertUnits = () => {
    if (convertInput.value) {        
    length.textContent = `${convertInput.value} meters = ${(convertInput.value * 3.281).toFixed(3)} feet | ${convertInput.value} feet = ${(convertInput.value / 3.281).toFixed(3)} meters`
    
    volume.textContent = `${convertInput.value} liters = ${(convertInput.value * 0.264).toFixed(3)} gallons | ${convertInput.value} gallons = ${(convertInput.value / 0.264).toFixed(3)} liters`
    
    mass.textContent = `${convertInput.value} kilos = ${(convertInput.value * 2.204).toFixed(3)} pounds | ${convertInput.value} pounds = ${(convertInput.value / 2.204).toFixed(3)} kilos`
    }    
}


convertBtn.addEventListener("click", convertUnits)