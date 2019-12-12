
//function newContact(url){
 //   const win = window.open(url);
//};




// Index button 
function butnIndex(){
    alert('You are on the index!');
 };

 // New button
function contactPage() { 
window.open('file:///Users/danielbueno/445Project/445Project/contactpage.html','_blank');
};

// get to edit page
function editPage() {
    window.open('file:///Users/danielbueno/445Project/445Project/edit.html','_blank');
};


/*
function saveLocal () {

var namex = localStorage.getItem("names");


if (namex) {
    alert('yes');
    names = JSON.parse(localStorage.getItem("names"));
    emails = JSON.parse(localStorage.getItem("emails"));
    phones = JSON.parse(localStorage.getItem("phones"));

} else {
    alert('no');
    names=[];
    emails=[];
    phones=[];

    localStorage.setItem("names", JSON.stringify(names));
    names = JSON.parse(localStorage.getItem("names"));
    
    localStorage.setItem("emails", JSON.stringify(emails));
    emails = JSON.parse(localStorage.getItem("emails"));
  
    localStorage.setItem("phones", JSON.stringify(phones));
    phones = JSON.parse(localStorage.getItem("phones"));
  
    }
    
    
    alert(name);
    alert(names);
  
    names.push(name);
    emails.push(email);
    phones.push(phone);
    

  localStorage.setItem('names', JSON.stringify(names));
  localStorage.setItem('emails', JSON.stringify(emails));
  localStorage.setItem('phones', JSON.stringify(phones));
  

  JSON.parse(localStorage.getItem('names'));
  JSON.parse(localStorage.getItem('emails'));
  JSON.parse(localStorage.getItem('phones'));
  

}
*/ 
/*
function saveInputs () {

    if (typeof(Storage) !== "undefined") {
        // Store
        
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;

        saveLocal();

        var len = document.getElementById("phone").value;
        var pLen = len.length;

        var pStr = document.getElementById("phone").value;
        var firstPos = pStr.charAt(0);
     
        if (pLen === 10 && firstPos !== "0" && firstPos !== "1") {

          localStorage.setItem("name", name);

          localStorage.setItem("email", email);

          localStorage.setItem("phone", phone);
          
          // Retrieve
          document.getElementById("name").innerHTML = localStorage.getItem("name");
          document.getElementById("email").innerHTML = localStorage.getItem("email");
          document.getElementById("phone").innerHTML = localStorage.getItem("phone");

          setTimeout('window.location = "detailspage.html"',500);
          

        } else {
          alert('Enter a 10 digit phone number, without symbols, not beginning with 1 or 0');
        }

    } else {
        document.getElementById("name").innerHTML = "Sorry error...";
  }
}

*/



/*
const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const form = document.getElementById('email');


        form.addEventListener('submit', (e) => {

            if (phone.value.length < 10) {
                messages.push('Phone number must be 10 digits long')
            } else (phone.value.length > 10) {
                messages.push('Too many digits entered, must be 10 digits.')
            } 
        });

/*
         function validate() 
        {
            const text = document.getElementById(" ").vlaue;

            const regx = [0-9];
        }
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    
*/