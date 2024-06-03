// document.getElementById('clientForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   let name = document.getElementById('name').value;
//   let phone_number = document.getElementById('phone_number').value;

//   fetch('https://admin.kosmostj.uz/client/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRFToken': getCookie('csrftoken')  // CSRF tokenini oling
//     },
//     body: JSON.stringify({
//       name: name,
//       phone_number: phone_number
//     })
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// });

// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     let cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i].trim();
//       // Bu cookie name bilan boshlanyaptimi?
//       if (cookie.substring(0, name.length + 1) === (name + '=')) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-form button').addEventListener('click', function() {
        var name = document.querySelector('.contact-form input[type="text"]').value;
        var phone_number = document.querySelector('.contact-form input[type="tel"]').value;

        var data = {
            name: name,
            phone_number: phone_number
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://admin.kosmostj.uz/client/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(JSON.stringify(data));
    });
});

function sendDataToGoogleSheet() {
    var data = {
      name: "John Doe",
      phone_number: "1234567890"
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbw_OgSDhd21hdWyRCR_fAgq9oi0qExUeC-HwPJWKU7QPo5z-1hTANd3_pOEzwXLpE6v/exec', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(data));
  }
  