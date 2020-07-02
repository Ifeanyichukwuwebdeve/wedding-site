

  $('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // Form

  const form = document.querySelector('#form')
  const name = document.querySelector('#name')
  const email = document.querySelector('#email')
  const subject = document.querySelector('#subject')
  const message = document.querySelector('#message')
  
  form.addEventListener('submit', (e) => {
      e.preventDefault()
  
      checkInputs()
  })
  
  
  
  const checkInputs = () => {
      // Get the value from inputs
      const nameValue = name.value.trim()
      const emailValue = email.value.trim()
      const subjectValue = subject.value.trim()
      const messageValue = message.value.trim()
  
      if (nameValue === '') {
          setErrorFor(name, 'Name cannot be blank')
      } 
      else {
          setSuccessFor(name, '')
      }
  
      if (emailValue === '') {
          setErrorFor(email, 'Email cannot be blank')
      }
      else if (!isEmail(emailValue)) {
          setErrorFor(email, 'Email is not valid')
      }
      else {
          setSuccessFor(email, ' We\'ll never share your email with anyone else.')
      }
  
      if (subjectValue === '') {
          setErrorFor(subject, 'Subject cannot be blank')
      }else{
          setSuccessFor(subject, '')  
      }
      if (messageValue === '') {
          setErrorFor(message, 'Message check is blank')
      }else{
          setSuccessFor(message, '')
      }
  
  }
  
  
  const setErrorFor = (input, message) => {
      const formGroup = input.parentElement
      const small = formGroup.querySelector('small')
  
      small.innerText = message
  
      formGroup.className = 'form-group error'
  }
  
  const setSuccessFor = (input, message) => {
      const formGroup = input.parentElement
      const small = formGroup.querySelector('small')
  
      small.innerText = message
      formGroup.className = 'form-group successs'
  }
  
  const isEmail = (email) => {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }