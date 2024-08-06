//Form config
const InputListconfig = [
    {
      type: "text",
      id: "",
      name: "full_name",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "",
    },
    {
      type: "email",
      id: "",
      name: "email",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "",
    },
    { type: "checkbox", id: "", name: "accept", required: "", checked: "", value: "", label: "" },
    {
      type: "password",
      id: "",
      name: "password",
      maxLength: "",
      minLength: "",
      pattern: "",
      placeholder: "",
      required: "",
      value: "",
      label: "",
    },
    { type: "date", id: "", name: "dob", max: "", min: "", placeholder: "", required: "", value: "", label: "" },
    { type: "number", id: "", name: "marks", min: "", max: "", placeholder: "", required: "", value: "", label: "" },
    { type: "radio", id: "", name: "gender", required: "", checked: "", value: "Male", label: "" },
    { type: "radio", id: "", name: "gender", required: "", checked: "", value: "Female", label: "" },
    {
      type: "select",
      id: "",
      name: "state",
      required: "",
      value: "delhi",
      label: "",
      options: [
        { label: "Delhi", value: "delhi" },
        { label: "Mumbai", value: "mumbai" },
        { label: "UP", value: "Up" },
      ],
    },
  ];

  const form = document.querySelector(".generated-form");
  const formElement = form.createElement('input');
  InputListconfig.forEach(formElement => {
    formElement.setAttribute(InputListconfig);
  });