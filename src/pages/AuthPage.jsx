import { useState } from "react";
import CheckOtpForm from "components/templates/CheckOtpForm";
import SendOtpForm from "components/templates/SendOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          mobile={mobile}
          setStep={setStep}
          code={code}
          setCode={setCode}
        />
      )}
    </div>
  );
}

export default AuthPage;
