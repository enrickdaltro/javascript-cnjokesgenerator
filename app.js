// EVENT LISTENER
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// GET JOKES FUNCTION
function getJokes(e) {
    // GET THE NUMBER OF JOKES FROM THE INPUT
    const number = document.querySelector('input[type="number"]').value;
    // PREPARE THE AJAX/XHR REQUEST AND CREATE A NEW OBJECT
    const xhr = new XMLHttpRequest();
    // CALL OPEN AND PASS API LINK
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    // WHEN DATE GETS TAKEN, WE CALL ONLOAD
    xhr.onload = function() {
        // CHECK STATUS (200)
        if (this.status === 200) {
            // IF TRUE, WE SET A VARIABLE TO REPRESENT THE INPUT
            const response = JSON.parse(this.responseText);

            // DECLARE A VARIABLE THAT WILL OUTPUT THOSE JOKES
            let output = '';

            // CHECK IF THE REQUEST WENT RIGHT
            if (response.type === 'success') {
                // WE WANT LOOP THROUGHT IT
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }

            // SHOW JOKES ON THE DOM
            document.querySelector('.jokes').innerHTML = output;
        }
    };

    xhr.send();
    e.preventDefault();
}
