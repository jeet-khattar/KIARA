import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="outerside bg-light SignUp">
        <h1 className="text-center">Sign Up for our newsletter</h1>
        <main class="form-signin w-100 m-auto">
          {" "}
          <form>
            {" "}
            <div class="form-floating">
              {" "}
              <input
                type="email"
                id="floatingInput"
                placeholder="Enter Your Email"
              />{" "}
            </div>{" "}
            <button class="btn py-2" type="submit">
              SIGN UP
            </button>{" "}
          </form>{" "}
        </main>
      </div>
    </>
  );
};

export default SignUp;
