import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "services/user";

function CheckOtpForm({ mobile, setStep, code, setCode }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
      console.log(response);
    }
    if (error) {
      console.log(error);
    }
    console.log({ code, mobile });
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده را به شماره موبایل{mobile}وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></input>
      <button type="submit">ورود</button>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
