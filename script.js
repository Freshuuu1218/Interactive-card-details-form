const numberOnCard = document.querySelector('#number');
const nameOnCard = document.querySelector('#name');
const dateOnCard = document.querySelector('#date');
const cvcOnCard = document.querySelector('#cvc');

const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

button.addEventListener('click',()=>{
    const numberInForm = document.querySelector('#formNumber');
    const nameInForm = document.querySelector('#formName');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const dateInForm = month.value + '/' + year.value  ;
    const cvcInForm = document.querySelector('#formCvc');
    let errors = 0;


    if(numberInForm.value === ""){
        const inputDiv = document.querySelector('#formNumber').parentElement;
        let error = document.createElement('span');
        error.innerHTML = "can't be blank";
        error.style.color = 'red';
        inputDiv.appendChild(error);
        numberInForm.style.border = "1px solid hsl(0, 100%, 66%)";
        errors++;
    }
    if(numberInForm.value !== ""){
       let numbers = /^[0-9]*$/.test(numberInForm.value);
       if(numbers === false){
          const inputDiv = document.querySelector('#formNumber').parentElement;
          let error = document.createElement('span');
          error.innerHTML = "Only numbers are allowed";
          error.style.color = 'red';
          inputDiv.appendChild(error);
          numberInForm.style.border = "1px solid hsl(0, 100%, 66%)";
          errors++;
       }
    }
    if(nameInForm.value === ""){
        const inputDiv = document.querySelector('#formName').parentElement;
        let error = document.createElement('span');
        error.innerHTML = "can't be blank";
        error.style.color = 'red';
        inputDiv.appendChild(error);
        nameInForm.style.border = "1px solid hsl(0, 100%, 66%)";
        errors++;

    }
    if(month.value === "" || year.value === ""){
        const inputDiv = document.querySelector('.date') ;
        let error = document.createElement('span');
        error.innerHTML = "can't be blank";
        error.style.color = 'red';
        inputDiv.appendChild(error);
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
        const inputDiv = document.querySelector('#formCvc').parentElement;
        let error = document.createElement('span');
        error.innerHTML = "can't be blank";
        error.style.color = 'red';
        inputDiv.appendChild(error);
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


