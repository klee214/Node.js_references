    // Inside a Object, only valid property field is allowed 
    
    const test = {
      name: "kim",
      email: "asd@asd.asd",
      password: "123456"
    }
    const reqBody = Object.keys(test);  //Object.key => find the field names
    const userObject = ["name", "email", "password"];
    
    const isValid = reqBody.every(reqBody => userObject.includes(reqBody)); // every => everything should be ok
