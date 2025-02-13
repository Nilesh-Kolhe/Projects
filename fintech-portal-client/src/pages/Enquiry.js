import axios from "axios";
import { useState, useEffect, useRef } from "react";
import call from "./images/Enq.jpg";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
// import GMap from '../components/GMap';

const Enquiry = () => {
  let otpRef = useRef();
  const [isEnquiryReceived, setIsEnquiryReceived] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { contact } = useParams();
  console.log("URL Contact: ", contact);
  const [isReferred] = useState(contact !== undefined);
  const TXT_REFERRAL = "referral";
  const [errors, setErrors] = useState({});
  const [isOtpDisabled, setIsOtpDisabled] = useState({
    isSendOtpDisabled: false,
    isVerifyOtpDisabled: false,
  });
  const initialOtpmessageState = {
    sendOtp: "",
    verifyOtp: "",
  };

  const products = [
    { value: "personal", label: "Personal Loan" },
    { value: "business", label: "Business Loan" },
    { value: "home", label: "Home Loan" },
    { value: "auto", label: "Auto Loan" },
    { value: "credit", label: "Credit Card" },
    { value: "working", label: "Working Capital" },
  ];

  const TypeOptions = [
    { value: "self", label: "Self" },
    { value: "referral", label: "Referral" },
  ];

  const [otpMessage, setOtpMessage] = useState(initialOtpmessageState);
  const initialFormData = {
    // name: '',
    contact: contact || "",
    type: isReferred ? TXT_REFERRAL : "",
    // email: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Handle Change Form Data: ", formData);
    switch (name) {
      // case 'name':
      //     if (!value) {
      //         setErrors({
      //             ...errors,
      //             [name]: 'Name is Required !'
      //         });
      //     }
      //     else {
      //         setErrors({
      //             ...errors,
      //             [name]: ''
      //         });
      //     }
      //     break;
      case "contact":
        if (!value) {
          setErrors({
            ...errors,
            [name]: "Contact number is Required !",
          });
        } else if (value.length < 10) {
          setErrors({
            ...errors,
            [name]: "Contact number should be atleast 10 digits !",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "type":
        if (value === "select") {
          setErrors({
            ...errors,
            [name]: "Please select enquiry type",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "referral":
        if (!value) {
          setErrors({
            ...errors,
            [name]: "Referral contact number is Required !",
          });
        } else if (value.length < 10) {
          setErrors({
            ...errors,
            [name]: "Referral contact number should be atleast 10 digits !",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;
      case "location":
        if (!value) {
          setErrors({
            ...errors,
            [name]: "Location is Required !",
          });
        } else {
          setErrors({
            ...errors,
            [name]: "",
          });
        }
        break;

      // case 'email':
      //     if (!value) {
      //         setErrors({
      //             ...errors,
      //             [name]: 'Email is Required !'
      //         });
      //     } else if (!/\S+@\S+\.\S+/.test(value)) {
      //         setErrors({
      //             ...errors,
      //             [name]: 'Email is not valid !'
      //         });
      //     } else {
      //         setErrors({
      //             ...errors,
      //             [name]: ''
      //         });
      //     }
      //     break;
      default:
        break;
    }
  };

  const sendOTP = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/send`, {
        countryCode: "+91",
        phoneNumber: formData.contact,
      })
      .then((response) => {
        console.log("sendOTP Response: ", response);
        setIsOtpDisabled((prevState) => ({
          ...prevState,
          isSendOtpDisabled: true,
        }));
        setOtpMessage(() => ({
          sendOtp: "OTP Sent Successfully !",
        }));

        setTimeout(
          () => (
            setIsOtpDisabled((prevState) => ({
              ...prevState,
              isSendOtpDisabled: false,
              // eslint-disable-next-line no-sequences
            })),
            setIsOtpDisabled((prevState) => ({
              ...prevState,
              isVerifyOtpDisabled: false,
            })),
            setOtpMessage((prevState) => ({
              ...prevState,
              sendOtp: "",
              verifyOtp: "",
            }))
          ),
          600000
        ); // 1000
      })
      .catch((error) => {
        console.error(error);
        setOtpMessage(() => ({
          sendOtp: "Unable to send OTP",
        }));
      });

    // setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: true }));
    // setOtpMessage(() => ({
    //     sendOtp: 'OTP Sent Successfully !'
    // }));

    // setTimeout(() => (setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: false })),
    //     (setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: false }))),
    //     setOtpMessage((prevState) => ({
    //         ...prevState,
    //         sendOtp: '',
    //         verifyOtp: ''
    //     }))
    // ), 600000); // 1000
  };

  const verifyOTP = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/verify`, {
        countryCode: "+91",
        phoneNumber: formData.contact,
        otp: otpRef.current.value,
      })
      .then((response) => {
        console.log("sendOTP Response: ", response);
        setIsOtpDisabled((prevState) => ({
          ...prevState,
          isVerifyOtpDisabled: true,
        }));
        setOtpMessage((prevState) => ({
          verifyOtp: "OTP Verified Successfully !",
        }));
        setErrors({
          ...errors,
          isContactVerified: "",
        });
      })
      .catch((error) => {
        setOtpMessage((prevState) => ({
          verifyOtp: "Unable to verify OTP !",
        }));
        setErrors({
          ...errors,
          isContactVerified: "Unable to verify contact number",
        });
        console.error("Error verifiying OTP ", error);
      });
  };

  useEffect(() => {
    console.log("UseEffect Errors: ", errors);
    const numberOfErrors = formData.type === TXT_REFERRAL ? 5 : 4;
    if (Object.keys(errors).length === numberOfErrors) {
      let isValid = true;
      for (var error in errors) {
        if (errors[error] !== "") {
          isValid = false;
          break;
        }
      }
      setIsFormValid(isValid);
    }
  }, [errors, formData.type]);

  useEffect(() => {
    console.log("Initial UseEffect Errors: ", errors);
    if (isReferred) {
      setErrors({
        ...errors,
        contact: "",
      });
    }
  }, [errors, isReferred]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit FormData: ", formData);
    let enquiryBody = {
      name: formData.name,
      location: formData.location,
      type: formData.type,
      contact: formData.contact,
      email: formData.email,
    };

    enquiryBody = {
      ...enquiryBody,
      ...(formData.type === TXT_REFERRAL
        ? { referral: formData.referral }
        : {}),
    };
    console.log("Body: ", enquiryBody);
    axios
      .post(
        `${process.env.REACT_APP_FINTECH_SERVER_URL}/submitEnquiry`,
        enquiryBody
      )
      .then((response) => {
        console.log("Save Enquiry Response: ", response);
        const smsBody = {
          enquiryId: response.id,
        };
        axios.post(
          `${process.env.REACT_APP_FINTECH_SERVER_URL}/sms/send`,
          smsBody
        );
        setIsEnquiryReceived(true);
      })
      .catch((error) => console.error(error));
  };

  const resetFormData = (event) => {
    event.preventDefault();
    setErrors({});
    setOtpMessage(initialOtpmessageState);
    setFormData(initialFormData);
  };

  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="container mx-auto px-4 py-12">
          {!isEnquiryReceived ? (
            <>
              <div className="max-w-3xl mx-auto bg-white/90 rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Submit an Enquiry
                </h3>

                <form className="space-y-6" name="Enquire Now">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="fname"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                ${
                                                  errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }`}
                      value={formData.name}
                      onBlur={handleChange}
                      onFocus={() => {
                        setErrors((errors) => {
                          const { name, ...rest } = errors;
                          return rest;
                        });
                      }} //
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Location and Product Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Location Field */}
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                ${
                                                  errors.location
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }`}
                        value={formData.location}
                        onBlur={handleChange}
                        onFocus={() => {
                          setErrors((errors) => {
                            const { location, ...rest } = errors;
                            return rest;
                          });
                        }}
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm">
                          {errors.location}
                        </p>
                      )}
                    </div>

                    {/* Product Dropdown */}
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="location"
                      >
                        Product
                      </label>
                      <select
                        name="product"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                ${
                                                  errors.product
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }`}
                        value={formData.product}
                        onBlur={handleChange} //
                        onChange={handleChange}
                        onFocus={() => {
                          setErrors((errors) => {
                            const { product, ...rest } = errors;
                            return rest;
                          });
                        }}
                      >
                        <option value="select">--Select Product--</option>
                        {products.map((product) => (
                          <option key={product.value} value={product.value}>
                            {product.label}
                          </option>
                        ))}
                      </select>
                      {errors.product && (
                        <p className="text-red-500 text-sm">{errors.product}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email ID"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                ${
                                                  errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }`}
                      defaultValue={formData.email}
                      onBlur={handleChange}
                      onFocus={() => {
                        setErrors((errors) => {
                          const { email, ...rest } = errors;
                          return rest;
                        });
                      }} //
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Mobile Number with OTP */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="contact"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        name="contact"
                        placeholder="Your mobile number"
                        className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                ${
                                                  errors.contact
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }`}
                        defaultValue={
                          !isReferred ? formData.contact : undefined
                        }
                        value={isReferred ? formData.contact : undefined}
                        readOnly={formData.contact}
                        onBlur={handleChange}
                        onFocus={() => {
                          setErrors((errors) => {
                            const { contact, ...rest } = errors;
                            return rest;
                          });
                        }}
                      />
                      {!isReferred ? (
                        <button
                          disabled={isOtpDisabled.isSendOtpDisabled}
                          onClick={sendOTP}
                          className="bg-violet-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                                                text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                                                hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 
                                                                focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
                        >
                          Send OTP
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                    {errors.contact && (
                      <p className="text-sm text-red-500">{errors.contact}</p>
                    )}
                    {otpMessage.sendOtp && (
                      <p className="text-sm text-green-600">
                        {otpMessage.sendOtp}
                      </p>
                    )}
                  </div>

                  {/* OTP Verification */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="otp"
                    >
                      OTP <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        ref={otpRef}
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 
                                                        focus:ring-violet-500 focus:border-transparent"
                      />
                      <button
                        disabled={
                          !isOtpDisabled.isSendOtpDisabled ||
                          isOtpDisabled.isVerifyOtpDisabled
                        }
                        onClick={verifyOTP}
                        style={{ fontSize: "small" }}
                        className="bg-violet-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                                            text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                                            hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 
                                                            focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                      >
                        Verify OTP
                      </button>
                    </div>
                    {otpMessage.verifyOtp && (
                      <p className="text-sm text-green-600">
                        {otpMessage.verifyOtp}
                      </p>
                    )}
                    {/* <label className='message'> {otpMessage.verifyOtp} </label> */}
                  </div>

                  {/* Type Selection */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="type"
                      >
                        Type
                      </label>
                      <select
                        name="type"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                    ${
                                                      errors.type
                                                        ? "border-red-500"
                                                        : "border-gray-300"
                                                    }`}
                        value={formData.type}
                        onBlur={handleChange} //
                        onChange={handleChange}
                        onFocus={() => {
                          setErrors((errors) => {
                            const { type, ...rest } = errors;
                            return rest;
                          });
                        }}
                      >
                        <option value="select">--select type--</option>
                        {TypeOptions.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {errors.type && (
                      <p className="text-sm text-red-500">{errors.type}</p>
                    )}

                    {formData.type === TXT_REFERRAL && (
                      <div className="space-y-2">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="fname"
                        >
                          Referral Number{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="referral"
                          placeholder="Your referral number"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent
                                                                ${
                                                                  errors.referral
                                                                    ? "border-red-500"
                                                                    : "border-gray-300"
                                                                }`}
                          // defaultValue={formData.referral}
                          onBlur={handleChange}
                          onFocus={() => {
                            setErrors((errors) => {
                              const { referral, ...rest } = errors;
                              return rest;
                            });
                          }}
                        />
                      </div>
                    )}

                    {isReferred ? (
                      <>
                        <button
                          disabled={isOtpDisabled.isSendOtpDisabled}
                          onClick={sendOTP}
                          className="bg-violet-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                                                text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                                                hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 
                                                                focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
                        >
                          Send OTP
                        </button>
                        <label className="block text-sm font-medium text-gray-700">
                          {otpMessage.sendOtp}
                        </label>
                      </>
                    ) : (
                      <></>
                    )}

                    {errors.referral && (
                      <p className="text-sm text-red-500">{errors.referral}</p>
                    )}
                  </div>

                  {/* Form Buttons */}
                  <div className="flex flex-row sm:flex-row gap-6 justify-center">
                    <button
                      disabled={!isFormValid}
                      type="button"
                      className={
                        !isFormValid
                          ? `bg-gray-500 px-4 py-3 text-center text-sm font-semibold inline-block 
                                                            text-white cursor-pointer uppercase transition duration-200 ease-in-out 
                                                            rounded-md`
                          : `bg-green-600 hover:bg-green-700 px-4 py-3 text-center text-sm 
                                                            font-semibold inline-block text-white cursor-pointer uppercase 
                                                            transition duration-200 ease-in-out rounded-md focus-visible:outline-none 
                                                            focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95`
                      }
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>

                    <button
                      onClick={resetFormData}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-3 text-center text-sm 
                                                            font-semibold inline-block text-white cursor-pointer uppercase 
                                                            transition duration-200 ease-in-out rounded-md focus-visible:outline-none 
                                                            focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="max-w-3xl mx-auto mt-12">
                <div className="bg-gray-200/80 p-8 rounded-xl text-center space-y-6">
                  <h2 className="text-4xl font-bold text-gray-800">
                    {" "}
                    Enquiry Received!{" "}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {" "}
                    Our team will get back to you shortly.{" "}
                  </p>

                  <button
                    onClick={(e) => {
                      resetFormData(e);
                      setIsEnquiryReceived(false);
                    }}
                    className="bg-green-600 hover:bg-green-700 px-4 py-3 text-center text-sm 
                                                    font-semibold inline-block text-white cursor-pointer uppercase 
                                                    transition duration-200 ease-in-out rounded-md focus-visible:outline-none 
                                                    focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mt-28 mx-auto max-w-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                How can we help you?
              </h2>
              <p className="text-lg text-gray-600">
                As an investment banking firm in India, we raise funds
                strategically from a variety of sources, including Domestic or
                International Fund Houses, and Govt. Banks, Private Banks,
                Cooperative Banks, and NBFCs.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={call}
                alt="Contact"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enquiry;
