const numberOnCard = document.querySelector('#number');
const nameOnCard = document.querySelector('#name');
const dateOnCard = document.querySelector('#date');
const cvcOnCard = document.querySelector('#cvc');

const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

button.addEventListener('click',()=>{
    const nameInForm = document.querySelector('#formName');
    const nameInFormError = document.querySelector('.error1');
    const numberInForm = document.querySelector('#formNumber');
    const numberInFormError = document.querySelector('.error2');
    const numberInFormError2 = document.querySelector('.error3');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const dateError = document.querySelector('.error4')
    const dateInForm = month.value + '/' + year.value  ;
    const cvcInForm = document.querySelector('#formCvc');
    const cvcInFormError = document.querySelector('.error5');
    let errors = 0;
    let errorsArr = [nameInFormError, numberInFormError, numberInFormError2, dateError, cvcInFormError]; 

        inputs.forEach(input =>{
            input.style.border = "1px solid #ddd";
            errorsArr.forEach(error =>{
                error.classList.add('vanish');
        })
    })
 
    if(numberInForm.value === ""){   
        numberInFormError.classList.remove('vanish');
        numberInForm.style.border = "1px solid hsl(0, 100%, 66%)";
        errors++;

    }
    if(numberInForm.value !== ""){
       let numbers = /^[0-9\s]*$/.test(numberInForm.value);
       if(numbers === false){
          numberInFormError2.classList.remove('vanish');
          numberInForm.style.border = "1px solid hsl(0, 100%, 66%)";
          errors++;
       }
    }
    if(nameInForm.value === ""){
        nameInFormError.classList.remove('vanish');
        nameInForm.style.border = "1px solid hsl(0, 100%, 66%)";
        errors++;

    }
    if(month.value === "" || year.value === ""){
        dateError.classList.remove('vanish');
        errors++;

        if(month.value==="" && year.value===""){
            month.style.border = "1px solid hsl(0, 100%, 66%)"
            year.style.border = "1px solid hsl(0, 100%,66%)"
        }else if(year.value===""){
            year.style.border = "1px solid hsl(0, 100%,66%)"
        }else{
            month.style.border = "1px solid hsl(0, 100%, 66%)"
        }
    }
        if(cvcInForm.value === ""){
        cvcInFormError.classList.remove('vanish');
        cvcInForm.style.border = "1px solid hsl(0, 100%, 66%)";
        errors++;

    }

    if(errors == 0){
        let success = document.querySelector('.complete');
        let form = document.querySelector('.active');
        success.style.display = "flex";
        form.style.display = "none";
    }
    numberOnCard.innerHTML = numberInForm.value;
    nameOnCard.innerHTML = nameInForm.value;
    dateOnCard.innerHTML = dateInForm;
    cvcOnCard.innerHTML = cvcInForm.value;

})


