import React from "react";

export const Posts = () => {
  const Submit = (e) => {
    const formElement = document.querySelector("form");
    e.preventDefault();
    console.log("submited");
    const formData = new FormData(formElement);
    if (Submit == true) {
        alert('True')
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbytVv6OuO1ZIchKpzDOaBO0VT-4DG3QA08p7XGRzLPqVvkPMUDHXqG26PzpB9115BJspA/exec",{
        method:"POST",
        body:formData
      }
    ).then((res)=>res.json()).then((data)=>{
        console.log(data);
    }).catch((error)=>console.log(error));
  };

  return (
    <div style={{ margin: "100px" }}>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input type="text" placeholder="name" name="Name" />
        <input type="text" placeholder="surname" name="Surname" />
        <input type="number" placeholder="number" name="Phone" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Posts;
