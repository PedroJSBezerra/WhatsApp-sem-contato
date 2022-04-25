//primeiro carregamento
window.onload = () => {
  //variaveis globais
  const form = document.getElementById('form')
  let phone = document.getElementById('phone')
  let device = document.querySelector('.device')
  let number = 0
  const desktopUrl = "https://web.whatsapp.com/send?phone=55"
  const mobileUrl = "https://api.whatsapp.com/send?phone=55"
  let wppUrl

  // testa se o dispositivo é mobile
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    device.innerHTML = "Dispositivo Móvel"
    wppUrl = mobileUrl
  }else{
    // false for not mobile device
    device.innerHTML = "Dispositivo Desktop"
    wppUrl = desktopUrl
  }
  //substitui o number e remove caracteres ao digitar
  phone.addEventListener('keyup', (evt) => {
    let temp = evt.target.value.replace(/\(|\)|\-|\s/g, "")
    console.log(temp)
    number = temp
  })
  //funcao de envio redirect
  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if(number == "") {
      window.alert("Por favor digite um número!")
      return
    }
    if(number.length < 10) {
      window.alert("Digite um número ex: (ddd)+0000-0000")
      return
    }
    window.open(wppUrl + number, '_blank')
  })
}