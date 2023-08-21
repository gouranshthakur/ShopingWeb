import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <div>        
      </div>
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-10 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form className="pb-10">
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Mobile No:- 9977113311
              </p>
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Email:- anilsainibhopal@gmail.com
              </p>
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Address:- L-163-164-B sector, Sonagiri, Raisen Road, Bhopal
              </p>
            </div>
            <div>
              <iframe
                width='1200px'    
                height='400px'            
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58659.79953820014!2d77.43675766684731!3d23.23444409391143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692598336722!5m2!1sen!2sin"
              ></iframe>                            
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
