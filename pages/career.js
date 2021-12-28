import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import image from '../public/linkedin.svg';


export default function Career() {
  const [formDetails, setFormDetails] = useState({});

  const handleOnChange = (name, value) => {
    console.log({ value });
    setFormDetails({...formDetails, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/sendgrid', formDetails).then((res) => {
      console.log({ res });
    })
  }

  return (
    <div className="career">
      <Header page="Home" route="/" />
      <section
        className="u-clearfix u-palette-1-base u-section-1"
        id="carousel_2592"
      >
        <div className="u-expanded-width u-shape u-shape-rectangle u-white u-shape-1"></div>
        <div className="u-align-center-sm u-align-center-xs u-container-style u-group u-radius-33 u-shape-round u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h2 className="u-text u-text-palette-2-base u-text-1">Career Form</h2>
            <h2 className="u-text u-text-default u-text-2"> Need More?</h2>
            <div className="u-form u-form-1">
              <form
                className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                style={{ padding: 15 }}
                onSubmit={(e) => handleSubmit(e)} 
                name="contact" netlify netlify-honeypot="bot-field" hidden
              >
                <div className="u-form-group u-form-name">
                <input
                    type="text"
                    placeholder="Name"
                    id="name-6797"
                    name="name"
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="u-form-email u-form-group">
                <input
                    type="email"
                    placeholder="Email"
                    id="email-6797"
                    name="email"
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="u-form-group u-form-name">
                <input
                    type="text"
                    placeholder="Mobile number"
                    id="name-6797"
                    name="phone"
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                    onChange={(e) => handleOnChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="u-form-group u-form-select u-form-group-3">
                <select
                      id="select-fdc3"
                      className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                      onChange={(e) => handleOnChange('designation', e.target.value)}
                      required
                    >
                      <option value="">
                        Select Designation
                      </option>
                      <option>
                        AngularJS Developer
                      </option>
                      <option>
                        Android Developer
                      </option>
                      <option>
                        DevOps Engineer
                      </option>
                      <option>
                        Human Reasource
                      </option>
                      <option>iOS Developer</option>
                      <option>
                        NodeJS Developer
                      </option>
                      <option>
                        ReactJS Developer
                      </option>
                      <option>
                        Sales Executive
                      </option>
                      <option>
                        UI/ UX Developer
                      </option>
                    </select>
                </div>
                <div className="u-form-group u-form-group-4">
                  <input type="file" id="myFile" name="filename" onChange={(e) => handleOnChange('file', e.target.value)}/>
                </div>
                <div className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-form-group u-form-submit">
                <button 
                  className="u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-3 u-palette-2-base u-radius-7 u-btn-1"

                value="submit">
                Submit
                </button>
                </div>
                <div className="u-form-send-message u-form-send-success">
                  Thank you! Your message has been sent.
                </div>
                <div className="u-form-send-error u-form-send-message">
                  Unable to send your message. Please fix errors then try again.
                </div>
                <input type="hidden" value="" name="recaptchaResponse" />
              </form>
            </div>
            <p className="u-text u-text-grey-50 u-text-3">
              {" "}
              At Softwill, we share a mindset that dictates our company culture
              and hiring criteria.
            </p>
            <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
              
            </span>
            <h5 className="u-align-center-md u-align-center-sm u-align-center-xs u-text u-text-grey-50 u-text-4 connect-us">
              Connect us on <a href="https://www.linkedin.com/company/72974697/admin" target="_blank" rel="noreferrer"><Image src={image} height={30} width={30} alt="image"/></a>
            </h5>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
