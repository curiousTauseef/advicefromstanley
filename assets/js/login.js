var tries = 5;

function authenticate(form)
{
  if(form.username.value=="smic" && form.password.value=="kappa123")//connect to a database
  {
      location="continue.html";
  }
  else
  {
    alert("Either your password or your username is incorrect, please try again");
    tries--;
    if(tries==0)
    {
      alert("You have exceeded the number of tries for entering a correct student ID and password");
    }
    return false;
  }

}
