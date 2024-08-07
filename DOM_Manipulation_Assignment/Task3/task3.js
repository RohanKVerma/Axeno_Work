//Form config
const InputListconfig = [
    {
      type: "text",
      id: "name",
      name: "full_name",
      maxLength: "30",
      minLength: "3",
      pattern: "",
      placeholder: "Enter your full name",
      required: "yes",
      value: "",
      label: "Name",
    },
    {
      type: "email",
      id: "mail_id",
      name: "email",
      minLength: "5",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      placeholder: "Enter your mail id",
      required: "yes",
      value: "",
      label: "Email",
    },
    { type: "checkbox", id: "confirmation", name: "accept", required: "", checked: "", value: "", label: "I accept all the terms and conditions." },
    {
      type: "password",
      id: "pass",
      name: "password",
      maxLength: "",
      minLength: "6",
      pattern: "[a-z0-9._%@$]",
      placeholder: "Create password",
      required: "yes",
      value: "",
      label: "Create password",
    },
    { type: "date", id: "dob", name: "dob", max: "", min: "", placeholder: "", required: "", value: "", label: "Enter your Date of Birth" },
    { type: "number", id: "phone", name: "marks", minLength:"10", maxLength:"10", placeholder: "", required: "", value: "", label: "Enter your phone number" },
    { type: "radio", id: "male", name: "gender", required: "", checked: "", value: "Male", label: "Male" },
    { type: "radio", id: "female", name: "gender", required: "", checked: "", value: "Female", label: "Female" },
    {
      type: "select",
      id: "place",
      name: "state",
      required: "yes",
      value: "delhi",
      label: "Select your place",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "UP", value: "Up" },
      ],
    },
  ];

  // const form = document.querySelector("#generated-form");
  // const formElement = form.createElement('input');
  // InputListconfig.forEach(formElement => {
  //   formElement.setAttribute(InputListconfig);
  // });
  const form = document.querySelector('#generated-form');
  const button = document.querySelector('.btn');
  const submit = document.querySelector('.submit_btn');


  function generate(){
    InputListconfig.forEach(field => {
      button.classList.replace("visible","invisible");
      submit.classList.replace("invisible","visible")
      createLabel(field);
      if(field.type == 'select'){
        createSelect(field);
      }else{
        createInput(field);
      }
    });
  }

  function createLabel(field) {
    if(!field.label == ""){
      const labelElement = document.createElement("label");
      labelElement.setAttribute("for", field.id);
      labelElement.textContent = field.label;
      form.appendChild(labelElement);
    }
  }

  function createInput(field){
    const input = document.createElement('input');

    input.setAttribute("type",field.type);
    input.setAttribute("name",field.name);
    input.setAttribute("id",field.id);
    if(field.maxLength> 0){
      input.setAttribute("maxlength",field.maxLength);
    }
    if(field.minLength > 0){
      input.setAttribute("minlength",field.minLength);
    }
    if(field.pattern){
      input.setAttribute("pattern",field.pattern);
    }
    form.appendChild(input);
  }

  function createSelect(field){
    const select = document.createElement('select');
    select.setAttribute("name",field.name);
    // option.textContent = 
    // console.log(field.options[0].label);
    field.options.forEach(label => {
    const option = document.createElement('option');
    option.textContent = label.label;
    select.appendChild(option);

    });
    form.appendChild(select);
  }