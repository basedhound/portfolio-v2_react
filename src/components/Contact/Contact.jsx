import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Reveal, SlideReveal } from "../../utils/Reveal";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  /*=============== EMAIL JS ===============*/
  const sendEmail = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    const publicKey = import.meta.env.VITE_EJS_KEY;
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm("service_xoa2uta", "template_ehkz8nv", form.current, publicKey)
      .then(
        () => {
          setSuccessMsg("Message envoyé avec succès ✅");
          form.current.reset();
          setTimeout(() => {
            setSuccessMsg(""); // Reset the success message
          }, 10000);
        },
        (error) => {
          console.log("EmailJS", error.text);
        }
      );
  };
  /*=============== NAME VALIDATION ===============*/
  const [name, setName] = useState("");
  const nameRegex = /^(?!^\s+$)[\p{L}\s'-]+$/u;

  const handleName = (event) => {
    const { value } = event.target;
    setName(value);
    // Evaluate if it matches the pattern values
    if (value.match(nameRegex)) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
      setIsValid(true);
    } else {
      event.target.classList.add("invalid");
      event.target.classList.remove("valid");
      setIsValid(false);
    }
    // If the input field is empty, remove classes
    if (value === "") {
      event.target.classList.remove("invalid");
      event.target.classList.remove("valid");
    }
  };
  /*=============== EMAIL VALIDATION ===============*/
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    // Evaluate if it matches the pattern values
    if (value.match(emailRegex)) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
      setIsValid(true);
    } else {
      event.target.classList.add("invalid");
      event.target.classList.remove("valid");
      setIsValid(false);
    }
    // If the input field is empty, remove classes
    if (value === "") {
      event.target.classList.remove("invalid");
      event.target.classList.remove("valid");
    }
  };
  /*=============== MESSAGE VALIDATION ===============*/
  const [message, setMessage] = useState("");
  const messageRegex = /^(?:\S+(?:\s+|$)){5,100}$/;
  const handleMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
    // Evaluate if it matches the pattern values
    if (value.match(messageRegex)) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
      setIsValid(true);
    } else {
      event.target.classList.add("invalid");
      event.target.classList.remove("valid");
      setIsValid(false);
    }
    // If the input field is empty, remove classes
    if (value === "") {
      event.target.classList.remove("invalid");
      event.target.classList.remove("valid");
    }
  };

  return (
    <section className="contact section" id="contact">
      <Reveal>
        <h2 className="section__title">Contact</h2>
        <ul className="contact__social-list">
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact__social-link">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact__social-link">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact__social-link">
              <i className="bx bxl-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact__social-link">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
        </ul>
      </Reveal>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.25, delay: 0.25 }}
              className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                franck.vukelic@gmail.com
              </span>
              <a
                href="mailto:franck.vukelic@gmail.com"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.25, delay: 0.5 }}
              className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+33 77 913 4587</span>
              <a
                href="https://api.whatsapp.com/send?phone=33779134587&text=Hello, more information!"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.25, delay: 0.75 }}
              className="contact__card">
              <i className="bx bxl-linkedin-square contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Frank Vukelić</span>
              <a
                href="https://m.me/fvklc"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="contact__content">
          <Reveal>
            <h3 className="contact__title">Parlez-moi de votre projet</h3>
          </Reveal>
          {/* Form */}
          <Reveal>
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="name">
                  Nom
                </label>
                <input
                  autoComplete="name"
                  className="contact__form-input"
                  id="name"
                  name="user_name"
                  placeholder="Votre nom"
                  type="text"
                  required
                  onChange={handleName}
                  value={name}
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag" htmlFor="email">
                  Mail
                </label>
                <input
                  autoComplete="email"
                  className="contact__form-input"
                  id="email"
                  name="user_email"
                  placeholder="Votre adresse Email"
                  type="email"
                  required
                  onChange={handleEmail}
                  value={email}
                />
              </div>
              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag" htmlFor="message">
                  Projet
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  autoComplete="off"
                  className="contact__form-input"
                  id="message"
                  name="user-message"
                  placeholder="Détails (100 mots max)"
                  required
                  onChange={handleMessage}
                  value={message}></textarea>
              </div>
              <div className="contact__button-wrap">
                <button className="button" type="submit">
                  Envoyer
                </button>
                {successMsg && <p>{successMsg}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
