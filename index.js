const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const btnEl = document.getElementById("btn-el")

btnEl.addEventListener("click", function() {
  const meterValue = 3.281
  const feetValue = 0.3048
  const literValue = 0.264
  const gallonValue = 3.785
  const kgValue = 2.205
  const poundValue = 0.454

  let input = document.getElementById("input").value

  length.value = `${input} meters = ${input * meterValue.toFixed(3)} feet | ${input} feet = ${input * feetValue.toFixed(3)} meters`

  volume.value = `${input} liters = ${input * literValue.toFixed(3)} gallons | ${input} gallons = ${input * gallonValue.toFixed(3)} liters`

  mass.value = `${input} kilos = ${input * kgValue.toFixed(3)} pounds | ${input} pounds = ${input * poundValue.toFixed(3)} kilos`

})



 
