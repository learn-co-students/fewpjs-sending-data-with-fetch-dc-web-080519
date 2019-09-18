// Add your code here
  // function submitData(userName, userEmail) {
  //   let configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: userName,
  //       email: userEmail
  //     })
  //   }
  //   fetch("http://localhost:3000/users", configObj)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(object) {
  //     var objectId = document.createElement("span")
  //     objectId.innerText = object.id;
  //     document.body.appendChild(objectId);
  //   })
  //   .catch(function(object) {
  //     debugger
  //     var errorMsg = document.createElement("span")
  //     errorMsg.innerText = object.message
  //     document.body.appendChild(errorMsg);
  //   })
  // }


  function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        debugger
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
    }
