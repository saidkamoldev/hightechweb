document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-form button').addEventListener('click', function() {
        var name = document.querySelector('.contact-form input[type="text"]').value;
        var phone_number = document.querySelector('.contact-form input[type="tel"]').value;

        var data = {
            name: name,
            phone_number: phone_number
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8000/client/', true);
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
  