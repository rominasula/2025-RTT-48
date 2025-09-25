let request;

document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

function testRequest() {
    request = new XMLHttpRequest();

    if (!request) {
        alert("Failed to create an XMLHttpRequest Object.");
        return false;
    }

    request.onreadystatechange = alertResponse;
    request.open("POST", "https://jsonplaceholder.typicode.com/todos");

    request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

    let inputVal = document.getElementById("myInput").value;
    let encodedVal = encodeURIComponent(inputVal);
    request.send(`data=${encodedVal}`); // query string
}

 function alertResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200 || request.status === 201) {
            alert(request.responseText);
            const result = JSON.parse(request.responseText)
            console.log(result.data)
            console.log(result.id)
        } else {
            alert("The request returned a status other than 200 OK: " + request.status);
        }
    }
}

// //const promise = fetch("https://isonplaceholder.typicode.com/todos")
// // promise
// //
// * then ((response) → response. json())
// //
// * then ((data) = console. log (data))

// async function getData) {
// const response = await fetch"https://jsonplaceholder. typicode.
// const data = await response. json()
// console. Log(data)
// }
// getData()