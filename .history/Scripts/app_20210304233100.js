/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

/***************************************************          CLASS User       ***************************************** */

// User Class
((core)=>
{
  class User 
  {
    // getters and setters
    get FirstName() 
    {
      return this.m_firstName;
    }
  
    set FirstName(value) 
    {
      this.m_firstName = value;
    }
  
    get LastName() 
    {
      return this.m_lastName;
    }
  
    set LastName(value) 
    {
      this.m_lastName = value;
    }

    get Username() 
    {
      return this.m_userName;
    }
  
    set Username(value) 
    {
      this.m_userName = value;
    }

    get Email() 
    {
      return this.m_email;
    }
  
    set Email(value) 
    {
      this.m_email = value;
    }

    get Password() 
    {
      return this.m_password;
    }
  
    set Password(value) 
    {
      this.m_password = value;
    }
  
    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [firstName=""]
     * @param {string} [lastName=""]
     * @param {string} [userName=""]
     * @param {string} [email=""]
     * @param {string} [password=""]
     */
    constructor(firstName = "", lastName = "", userName = "", email = "", password="") 
    {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.UserName = firstName + " " + lastName;
      this.Email = email;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the User class
     *
     * @returns {string}
     */
    toString() 
    {
      return `First Name : ${this.FirstName} \n
              Last Name  : ${this.LastName} \n
              User Name  : ${this.UserName} \n
              Email      : ${this.Email} \n
              Password   : ${this.Password}`;
    }

    /**
     * This method returns a JSON object made up of the properties of the User class
     *
     * @returns {Object}
     */
    toJSON()
    {
      return {
        "FirstName": this.FirstName,
        "LastName": this.LastName,
        "UserName": this.UserName,
        "Email": this.Email,
        "Password": this.Password
      }
    }

    /**
     * This method takes a JSON data object and assigns the values to the User class properties
     *
     * @param {Object} data
     */
    fromJSON(data)
    {
      this.FirstName = data.FirstName;
      this.LastName = data.LastName;
      this.UserName = data.UserName;
      this.Email = data.Email;
      this.Password = data.Password;
    }

    /**
     * This method converts the User into a comma-separated value string
     *
     * @returns {string}
     */
    serialize()
    {
      if(this.FirstName !== "" && this.LastName !== "" && this.UserName !== "" && this.Email !== "" && this.Password !== "")
      {
        return `${this.FirstName},${this.LastName},${this.UserName},${this.Email},${this.Password}`;
      }
      else 
      {
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the User class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
      let propertyArray = data.split(",");
      this.FirstName = propertyArray[0];
      this.LastName = propertyArray[1];
      this.UserName = propertyArray[2];
      this.Email = propertyArray[3];
      this.Password = propertyArray[4];
    }
  }

  core.User = User;

})(core || (core={}));

/***************************************************          function         ***************************************** */
((core) =>
{
    function displayHome()
    {
        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
         <p id="paragraphOne" class="fs-3 fw-bold">This is my first Paragraph</p>
        `;
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

/***************************************************       display Contact     ***************************************** */

    function testFullName()
    {
      let messageArea = $("#messageArea").hide();
      let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;
        
      $("#fullName").on("blur", function()
      {
        if(!fullNamePattern.test($(this).val()))
        {
          $(this).trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
        }
        else
        {
          messageArea.removeAttr("class").hide();
        }
      });
    }

    function testContactNumber()
    {
      let messageArea = $("#messageArea");
      let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        
      $("#contactNumber").on("blur", function()
      {
        if(!contactNumberPattern.test($(this).val()))
        {
          $(this).trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
        }
        else
        {
          messageArea.removeAttr("class").hide();
        }
      });
    }

    function testEmailAddress()
    {
      let messageArea = $("#messageArea");
      let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
      $("#emailAddress").on("blur", function()
      {
        if(!emailAddressPattern.test($(this).val()))
        {
          $(this).trigger("focus").trigger("select");
          messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
        }
        else
        {
          messageArea.removeAttr("class").hide();
        }
      });
    }

    function formValidation()
    {
      testFullName();
      testContactNumber();
      testEmailAddress();
    }

    function displayContact()
    {
      // form validation
      formValidation();

      $("#sendButton").on("click", (event)=> 
      {
        if($("#subscribeCheckbox")[0].checked)
        {
          let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);

          if(contact.serialize())
          {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
          }
        }
      });
    }

/***************************************************     displayContactList    ***************************************** */

    function displayContactList() 
    {
      if (localStorage.length > 0) 
      {

        let contactList = document.getElementById("contactList");

        let data = "";

        let keys = Object.keys(localStorage);
         
        let index = 1;

        for (const key of keys) 
        {
          let contactData = localStorage.getItem(key);

          let contact = new core.Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row" class="text-center">${index}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
          <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
          <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
          </tr>`;

          index++;
        }

        contactList.innerHTML = data;

        $("button.edit").on("click", function(){
          location.href = "edit.html#" + $(this).val();
         });

         $("button.delete").on("click", function(){
           if(confirm("Are you sure?"))
           {
            localStorage.removeItem($(this).val());
           }
           location.href = "contact-list.html"; // refresh the page
         });

         $("#addButton").on("click", function() 
         {
          location.href = "edit.html";
         });
      }
    }

/***************************************************        displayEdit        ***************************************** */

    function displayEdit()
    {
      let key = location.hash.substring(1);

      let contact = new core.Contact();

      // check to ensure that the key is not empty
      if(key != "")
      {
        // get contact info from localStorage
        contact.deserialize(localStorage.getItem(key));

        // display contact information in the form
        $("#fullName").val(contact.FullName);
        $("#contactNumber").val(contact.ContactNumber);
        $("#emailAddress").val(contact.EmailAddress);
      }
      else
      {
        // modify the page so that it shows "Add Contact" in the header 
        $("main>h1").text("Add Contact");
        // modify edit button so that it shows "Add" as well as the appropriate icon
        $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
      }

      // form validation
      formValidation();
      
     $("#editButton").on("click", function() 
        {
            // check to see if key is empty
          if(key == "")
          {
            // create a new key
            key = contact.FullName.substring(0, 1) + Date.now();
          }

          // copy contact info from form to contact object
          contact.FullName = $("#fullName").val();
          contact.ContactNumber = $("#contactNumber").val();
          contact.EmailAddress = $("#emailAddress").val();

          // add the contact info to localStorage
          localStorage.setItem(key, contact.serialize());

          // return to the contact list
          location.href = "contact-list.html";
          
        });
   

      $("#cancelButton").on("click", function()
      {
        // return to the contact list
        location.href = "contact-list.html";
      });
    }

/***************************************************        displayLogin       ***************************************** */

    function displayLogin()
    {
      let messageArea = $("#messageArea");
      messageArea.hide();

      $("#loginButton").on("click", function() 
      {
        let username = $("#username");
        let password = $("#password");
        let success = false;
        let newUser = new core.User();

        // use ajax to access the json file
        $.get("./Data/users.json", function(data)
        {
          // check each user in the users.json file  (linear search)
          for (const user of data.users) 
          {
            if(username.val() == user.UserName && password.val() == user.Password)
            {
              newUser.fromJSON(user);
              success = true;
              break;
            }
          }

          // if username and password matches - success... then perform login
          if(success)
          {
            // add user to session storage
            sessionStorage.setItem("user", newUser.serialize());

            // hide any error message
            messageArea.removeAttr("class").hide();

            // redirect user to secure area - contact-list.html
            location.href = "contact-list.html";
          }
          else
          {
            // display an error message
            username.trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
          }
        });
      });

      $("#cancelButton").on("click", function()
      {
        // clear the login form
        document.forms[0].reset();
        // return to the home page
        location.href = "index.html";
      });
    }

/***************************************************     displayRegister       ***************************************** */

    function CheckFirstName()
    {
      let errorMessage = $("#ErrorMessage").hide();
      let namePattern = /^[A-Z][a-z]+$/;

      $("#firstName").on("blur", function () {
        let validation = namePattern.test($(this).val());
        if (!validation) {
          errorMessage
            .show()
            .addClass("alert alert-danger")
            .text(
              "Please enter a valid Name. First name should have at least 2 characters and start with a uppercase letter."
            );
          $(this).trigger("focus").trigger("select");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });
    }

    function CheckLastName()
    {
      let errorMessage = $("#ErrorMessage").hide();
      let namePattern = /^[A-Z][a-z]+$/;

      $("#lastName").on("blur", function () {
        let validation = namePattern.test($(this).val());
        if (!validation) {
          errorMessage
            .show()
            .addClass("alert alert-danger")
            .text(
              "Please enter a valid Name. Last name should have at least 2 characters and start with a uppercase letter."
            );
          $(this).trigger("focus").trigger("select");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });
    }

    function CheckEmail()
    {
      let errorMessage = $("#ErrorMessage").hide();
      let emailPattern = /^([a-zA-Z0-9._%-]{8,}@[a-zA-Z0-9.-]{1,}\.[a-zA-Z]{2,6})*$/;

      $("#emailAddress").on("blur", function () {
        let validation = emailPattern.test($(this).val());
        if (!validation) {
          errorMessage
            .show()
            .addClass("alert alert-danger")
            .text("Please enter a valid Email Address.");
          $(this).trigger("focus").trigger("select");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });
    }

    function CheckPassword()
    {
      let errorMessage = $("#ErrorMessage").hide();
      let passwordPattern = /^([a-zA-Z0-9._%-]{6,})*$/;

      // check the length and pattern of password
      $("#password").on("blur", function () {
        let validation = passwordPattern.test($(this).val());
        if (!validation || $(this).val() == "") {
          errorMessage
            .show()
            .addClass("alert alert-danger")
            .text("Please enter a valid password. It should have at least 6 characters.");
          $(this).trigger("focus").trigger("select");
        } else {
          errorMessage.removeAttr("class").hide();
        }
      });
    }

    function CheckConfirmPassword()
    {
      let errorMessage = $("#ErrorMessage").hide();
      let passwordPattern = /^([a-zA-Z0-9._%-]{6,})*$/;

      // check the length and pattern of confirm password
      $("#confirmPassword").on("blur", function () {
        let validation = passwordPattern.test($(this).val());
        if (!validation || $(this).val() == "")
        {
          errorMessage
            .show()
            .addClass("alert alert-danger")
            .text("Please enter a confirm password. It should have at least 6 characters.");
          $(this).trigger("focus").trigger("select");
        }
        else
        { // check whether password matches with confirmed password
          if($("#password").val() !== $(this).val()) {
            errorMessage
            .show()
            .addClass("alert alert-danger")
            .text("Password didn't match. Please enter again.");
            $(this).val('');
            $("#password").val('');
            $("#password").trigger("focus").trigger("select");
          }
          else
          {
            errorMessage.removeAttr("class").hide();
          }
        }
      });
    }

    function RegisterValidation()
    {
      CheckFirstName();
      CheckLastName();
      CheckEmail();
      CheckPassword();
      CheckConfirmPassword();
    }

    function displayRegister()
    {
      // add error message div tag to register form
      $(`<div id="ErrorMessage"></div>`).insertBefore("form");

      // hide the error message at the beginning
      let errorMessage = $("#ErrorMessage");
      errorMessage.hide();

      RegisterValidation();

      $("#registerButton").on("click", (event) => {
      /* event.preventDefault();*/
      let firstName = $("#firstName");
      let lastName = $("#lastName");
      let email = $("#emailAddress");
      let password = $("#password")

      let newUser = new core.User(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );
        sessionStorage.setItem("user", newUser.FirstName);              //newUser.serialize()
        //console.log(newUser);
        location.href = "contact-list.html";
      });
    }

/***************************************************       toggleLogin         ***************************************** */

    function toggleLogin()
    {
      // if user is logged in
      if(sessionStorage.getItem("user"))
      {
        // swap out the login link for logout
        $("#login").html(
        `<a id="logout" class="nav-link" aria-current="page" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
        );

        $("#logout").on("click", function()
        {
          // perform logout
          sessionStorage.clear();

          // redirect back to login
          location.href = "login.html";
        });
       
        $(`<li class="nav-item">
        <a id="contactListLink" class="nav-link" aria-current="page" href="contact-list.html"><i class="fas fa-users fa-lg"></i> Contact List</a>
        </li>`).insertAfter("#contact");
      
        // insert user name between the Contact Us link & Login/Logout link 
        let currUser = new core.User();
        currUser.deserialize(sessionStorage.getItem("user"));
        let nameStr = "  [ User :  " + currUser.UserName + " ]  ";
        $(`<span id="UserLoginName" class="navbar-text text-warning"></span>`).insertBefore("#login");
        //$(`<span id="addUserLoginName" class="navbar-text text-primary"></span>`).insertBefore("#login");
        document.getElementById("UserLoginName").style.whiteSpace = "pre-wrap";
        //$("#UserLoginName").animate({whiteSpace: 'pre-wrap'});
        $("#UserLoginName").text(nameStr);
      }
    }


/***************************************************            Start          ***************************************** */
    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
            displayContactList();
            break;
          case "Edit":
            displayEdit();
            break;
          case "Login":
            displayLogin();
          break;
          case "Register":
            displayRegister();
          break;
        }

        // toggle login/logout
       toggleLogin();
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core={}));