// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import SplitForm from "../Stripe/SplitForm";
// import ShippingForm from "../Stripe/ShippingForm/ShippingForm";
// import { BsArrowRightShort } from "react-icons/bs";

// import { Typography } from "@mui/material";
// import {
//   BackBtn,
//   DisplayForm,
//   FormContainer,
//   InputBtn,
//   ResetBtn,
//   StepperContainer,
// } from "./styles/StepperForm";
// import SimpleLogin from "../SimpleLogin";
// import { useSelector } from "react-redux";

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <SimpleLogin step={step} />;
//     case 1:
//       return <ShippingForm />;
//     case 2:
//       return <SplitForm />;
//     default:
//       return "Unknown step";
//   }
// }

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,

//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#77dd77 ",
//       opacity: ".5",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#77dd77 ",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: "white",
//   display: "flex",
//   height: 22,
//   alignItems: "center",
//   ...(ownerState.active && {
//     color: "	#ffdfba ",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#77dd77",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle": {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }
// const steps = ["Login", "Shipping", "Payment"];

// export default function StepperForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const auth = useSelector((state) => state.auth);
//   const address = JSON.parse(localStorage.getItem("address"));

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <>
//       <StepperContainer>
//         <Stack
//           style={{ padding: "111px 0px" }}
//           sx={{ width: "100%" }}
//           spacing={4}
//         >
//           <Stepper
//             alternativeLabel
//             activeStep={activeStep}
//             connector={<QontoConnector />}
//           >
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//         </Stack>
//         <DisplayForm>
//           <>
//             <FormContainer>
//               <Typography>{getStepContent(activeStep)}</Typography>
//             </FormContainer>

//             <BackBtn left disabled={activeStep === 0} onClick={handleBack}>
//               Back
//             </BackBtn>

//             <InputBtn
//               right
//               type="submit"
//               value={activeStep === steps.length ? "Next" : ""}
//               variant="contained"
//               color="primary"
//               onClick={handleNext}
//               className="btn btn-primary"
//               disabled={activeStep === 2}
//             >
//               Next
//             </InputBtn>
//           </>
//         </DisplayForm>
//       </StepperContainer>
//     </>
//   );
// }
