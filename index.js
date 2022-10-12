function submitEmail() {
  const errorIcon = document.getElementById('errorIcon')
  const errorMessage = document.getElementById('errorMessage')
  const emailField = document.getElementById('email')
  const submittedEmail = emailField.value

  if (validateEmail(submittedEmail)) {
    errorIcon.style.display = 'none'
    errorMessage.style.display = 'none'
    emailField.style.borderColor = ''
  } else {
    errorIcon.style.display = 'block'
    errorMessage.style.display = 'block'
    emailField.style.borderColor = 'hsl(0, 93%, 68%)'
  }
}

//  https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}
