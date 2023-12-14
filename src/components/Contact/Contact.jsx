import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
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

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          {/* <h3 className="contact__title">Talk to me</h3> */}

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                franck.vukelic@gmail.com
              </span>

              {/* Insert your original email */}
              <a
                href="mailto:franck.vukelic@gmail.com"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+33 77 913 4587</span>

              {/* Insert a real number plus country code */}
              <a
                href="https://api.whatsapp.com/send?phone=33779134587&text=Hello, more information!"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Frank Vukelić</span>

              {/* Insert your brand name or profile */}
              <a
                href="https://m.me/fvklc"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Parlez-moi de votre projet</h3>

          {/* Form */}
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="name">
                Nom
              </label>
              <input
                className="contact__form-input"
                name="user_name"
                placeholder="Votre nom"
                type="text"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="email">
                Mail
              </label>
              <input
                className="contact__form-input"
                name="user_email"
                placeholder="Votre adresse Email"
                type="email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="message">
                Projet
              </label>
              <textarea
                cols="30"
                rows="10"
                className="contact__form-input"
                name="user-message"
                placeholder="Détails concernant votre projet"
                required></textarea>
            </div>

            <div className="contact__button-wrap">
              <button className="button" type="submit">
                Envoyer
              </button>
              {successMsg && <p>{successMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
