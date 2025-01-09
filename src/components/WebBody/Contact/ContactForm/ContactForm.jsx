import  { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();


  useEffect(() => emailjs.init("TwbEGHiMImOHYaimW"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_rrgiljh";
    const templateId = "template_0ipgf88";
    try {
   
      const a = form.current;
      const name = a.user_name.value;
      const email = a.user_email.value;
      const message = a.message.value;
      await emailjs.send(serviceId, templateId, {
        to_name: "Sahareior",
        from_name: name,
        from_email: email,
        message: message
      });
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 2300,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: false,
        theme: "light"
      });
      a.user_name.value = "";
      a.user_email.value = "";
      a.message.value = "";
    } catch (error) {
      toast.error("Failed to send the message.", {
        position: "top-center",
        autoClose: 2300,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: false,
        theme: "light"
      });
   
    } 
  };

  return (
    <>
      <ToastContainer />
      <StyledContactForm>
        <form ref={form} onSubmit={handleSubmit}>
          <label className="text-white">Your Name</label>
          <input type="text" name="user_name" />
          <label className="text-white">Your Email</label>
          <input type="email" name="user_email" />
          <label className="text-white">Message</label>
          <textarea name="message" />
          <input type="submit" value="Get in Touch" />
        </form>
      </StyledContactForm>
    </>
  );
};

export default ContactForm;

// Styles
const StyledContactForm = styled.div`
  width: 500px;
  @media (max-width: 568px) {
    width: 350px;
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      color: black;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      color: black;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background:#00FFFF;
      color: black;
      border: none;
      width: 30%;
    }
    input[type="submit"]:hover{
      background: #67151E;
      color: white;
    }
  }
`;
