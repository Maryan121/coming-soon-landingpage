let myForm = document.getElementById('form-field');
    let btn  = document.getElementById('btn');
    let input = document.getElementById('input');
    let errorMsg = document.getElementById('errormgs');
    btn.addEventListener('click',ValidateEmail);

    function ValidateEmail(e) 
    {
        e.preventDeafult();
      if(input.value == ''){
        input.style.border = 'hsl(354, 100%, 66%) solid 1px';
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'email field is empty';
        return(false) 
      }
      else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.input.value))
      {
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'succesifully subscribed';
        input.style.border = 'solid 1px hsl(209, 33%, 12%)'
        errorMsg.style.color = 'hsl(209, 33%, 12%)'
        return (true)
      }
      // else{
        input.style.border = 'hsl(354, 100%, 66%) solid 1px';
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'please provide a valid email address';      
        return (false)
    }
  

