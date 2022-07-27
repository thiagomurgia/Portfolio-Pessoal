import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Container } from "./styles";
import { ModalProvider } from "styled-react-modal";
import { useFormik } from "formik";
import * as yup from "yup";
import { Spring, animated } from "react-spring";
import { useState, useRef } from "react";
import { MessageConfirm } from "../../animations/MessageAnimation";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import emailjs from '@emailjs/browser'

export function Contact() {
  const form = useRef();

  

function sendEmail() {


  emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  const phoneValidate = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
  const sendForm = collection(db, "emails");

  const [modalOpen, setModalOpen] = useState(false);


  const contactSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("E-mail obrigatório e ou E-mail inválido")
      .required(),
    phone: yup.string().matches(phoneValidate, "Coloque um número válido."),
    message: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactSchema,

    onSubmit: async (values) => {
      await addDoc(sendForm, {
        values,
      });
      
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        formik.resetForm();
        sendEmail();
        Swal.fire({
          title: "Mensagem enviada com sucesso!",
          text: "Obrigado pela mensagem! Sua mensagem será respondida o mais breve possível!😊",
          icon: "success",
          confirmButtonText: "OK",
        });
      }, 5000);
    },
  });

  return (
    <Spring from={{ opacity: 0 }} to={[{ opacity: 1 }]}>
      {(styles) => (
        <animated.div style={styles}>
          <Container>
            <div className="wrapper">
              <div className="form-space">
                <div className="left">
                  <h1> VAMOS CONVERSAR </h1>
                  <h2>Pode me perguntar qualquer coisa</h2>
                  <h2>ou</h2>
                  <h2>me mande um oi...</h2>
                </div>
                <div className="right">
                  <h1>Contato</h1>
                  <form ref={form} onSubmit={formik.handleSubmit}>
                    {formik.touched.name && formik.errors.name
                      ? [
                          <label>
                            Nome:{" "}
                            <small style={{ color: "#B02934" }}>
                              *Nome é um campo obrigatório
                            </small>
                          </label>,
                          <input
                            id="name"
                            name="name"
                            type="name"
                            style={{ background: "#B02934" }}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />,
                        ]
                      : [
                          <label>Nome: </label>,
                          <input
                            id="name"
                            name="name"
                            type="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />,
                        ]}

                    {formik.touched.email && formik.errors.email
                      ? [
                          <label>
                            E-mail:{" "}
                            <small style={{ color: "#B02934" }}>
                              *Preencha um email válido
                            </small>
                          </label>,
                          <input
                            id="email"
                            name="email"
                            type="email"
                            style={{ background: "#B02934" }}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />,
                        ]
                      : [
                          <label>E-mail: </label>,
                          <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />,
                        ]}

                    {formik.touched.phone && formik.errors.phone
                      ? [
                          <label>
                            Telefone:{" "}
                            <small style={{ color: "#B02934" }}>
                              *Preencha um telefone válido
                            </small>
                          </label>,
                          <InputMask
                            id="phone"
                            name="phone"
                            type="phone"
                            mask="(99) 99999-9999"
                            style={{ background: "#B02934" }}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                          />,
                        ]
                      : [
                          <label>Telefone: </label>,
                          <InputMask
                            id="phone"
                            name="phone"
                            type="phone"
                            mask="(99) 99999-9999"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                          />,
                        ]}

                    {formik.touched.message && formik.errors.message
                      ? [
                          <label>
                            Mensagem:{" "}
                            <small style={{ color: "#B02934" }}>
                              *Deixe sua mensagem
                            </small>
                          </label>,
                          <textarea
                            id="message"
                            name="message"
                            type="message"
                            style={{ background: "#B02934" }}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                          />,
                        ]
                      : [
                          <label>Mensagem: </label>,
                          <textarea
                            id="message"
                            name="message"
                            type="message"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                          />,
                        ]}

                    <button type="submit">
                      <div>
                        {modalOpen ? (
                          <div className="modal">
                              {modalOpen ? (
                                <ModalProvider
                                >
                                  <div>
                                    <h1>
                                      <MessageConfirm />{" "}
                                    </h1>
                                  </div>
                                </ModalProvider>
                              ) : (
                                false
                              )}
                            </div>
                        ) : (
                          "ENVIAR"
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </animated.div>
      )}
    </Spring>
  );
}
