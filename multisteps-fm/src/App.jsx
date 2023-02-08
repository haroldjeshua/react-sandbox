import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-slate-900 pt-44">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-200" />
              <div className="h-4 rounded bg-slate-200" />
              <div className="h-4 w-4/6 rounded bg-slate-200" />
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
              onClick={() => setStep(step < 2 ? step : step - 1)}
            >
              Back
            </button>
            <button
              className={`${
                step > 4 ? "pointer-events-none opacity-50" : ""
              } flex items-center justify-center rounded-full text-white bg-blue-600 py-1.5 px-3.5 font-medium acking-tight hover:bg-blue-700 active:bg-blue-800`}
              onClick={() => setStep(step > 4 ? step : step + 1)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <div className="relative">
      <motion.div
        animate={status}
        variants={{
          active: {
            scale: 1,
            transition: { delay: 0, duration: 0.2 },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        animate={status}
        variants={{
          inactive: {
            backgroundColor: "var(--white)",
            borderColor: "var(--slate-200)",
            color: "var(--slate-400)",
          },
          active: {
            backgroundColor: "var(--white)",
            borderColor: "var(--blue-600)",
            color: "var(--blue-600)",
          },
          complete: {
            backgroundColor: "var(--blue-600)",
            borderColor: "var(--blue-600)",
            color: "var(--blue-600)",
          },
        }}
        transition={{ duration: 0.25 }}
        className={`relative flex w-10 h-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="w-8 h-8 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default App;
