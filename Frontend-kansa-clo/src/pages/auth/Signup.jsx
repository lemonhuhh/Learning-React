import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupbg from "../../assets/logo/signupbg.png";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if( formData.password === formData.confirmPassword){
      alert("Account successfully created")
      navigate("/login")
      setFormdata({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
    }
    else{
      alert("Password and confirm passowrd must be same!")
    }

    }; 

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_12%_10%,rgba(136,189,242,0.36),transparent_26rem),radial-gradient(circle_at_88%_92%,rgba(189,221,252,0.65),transparent_25rem)] p-4">
        <div className="flex w-full max-w-300 flex-col md:flex-row overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          {/* Welcome */}
          <div className="relative w-full md:w-1/2 min-h-5 md:min-h-125 flex items-center text-center justify-center overflow-hidden">
            {/* Background image - desktop only */}
            <img
              src={signupbg}
              className="hidden md:block absolute inset-0 w-full h-full object-cover"
            />

            <p className="relative text-[1.8rem] md:text-[4.3rem] font-extrabold tracking-wider text-[#184a7c]">
              JOIN US
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
            <p className="text-center mb-5 text-[2rem] md:text-[2.3rem] font-extrabold text-[#184a7c]">
              Sign Up
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Full name:
                </label>

                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Email:
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Phone number:
                </label>

                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Address:
                </label>

                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your address"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Password:
                </label>

                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Confirm password:
                </label>

                <input
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Sign Up Button */}
              <div className="text-center mt-4 col-span-3  ">
                <button
                  type="submit"
                  className=" min-w-full text-[1rem] p-2 rounded-4xl tracking-[0.05em] text-amber-50 bg-[#184a7c]"
                >
                  Sign Up
                </button>
              </div>

              {/* Login */}
              <div className="text-center pt-5 col-span-3">
                <span>
                  Already have an account?{" "}
                  <a href="/login" className="text-[#4e91d4] hover:underline">
                    Login
                  </a>
                </span>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
