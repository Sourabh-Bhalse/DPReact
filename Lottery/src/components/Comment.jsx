import React, { useState } from "react";
import "../styling/Form.css";
export default function Form() {
  // ✅ Single state object for all fields
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  // ✅ Generic handler for all inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    }); 
    if (
      !formData.fullName ||
      !formData.userName ||
      !formData.email ||
      !formData.password
    ) {
      alert("⚠️ Please fill all fields!");
      return;
    }
    alert(
      `✅ Submitted:\nFull Name: ${formData.fullName}\nUser Name: ${formData.userName}\nEmail: ${formData.email}`
    );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>comment form</h2>

      <label htmlFor="fullname">Full Name</label>
      <input
        required
        type="text"
        placeholder="Enter your full name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        id="fullname"
      />

      <label htmlFor="username">User Name</label>
      <input
        required
        type="text"
        placeholder="Enter your username"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        id="username"
      />

      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        id="email"
      />

      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
