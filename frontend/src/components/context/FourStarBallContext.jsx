import { createContext, useContext, useState } from 'react';

const BallStateContext = createContext();
const BallActionContext = createContext();
const ResetBallStateContext = createContext();

export function useBallState() {
  const context = useContext(BallStateContext);
  if (!context) {
    throw new Error(
      'useBallState must be used within a FourStarBallContextProvider'
    );
  }
  return context;
}

export function useBallAction() {
  const context = useContext(BallActionContext);
  if (!context) {
    throw new Error(
      'useBallAction must be used within a FourStarBallContextProvider'
    );
  }
  return context;
}

export function useBallStateReset() {
  return useContext(ResetBallStateContext);
}

export function FourStarBallContextProvider({ children }) {
  const [sendToPortal, setSendToPortal] = useState(false);
  const [fireballCompleted, setFireballCompleted] = useState(false);
  const [chaseDreamJob, setChaseDreamJob] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [showStateYourWish, setShowStateYourWish] = useState(false);
  const [showWishComeTrue, setShowWishComeTrue] = useState(false);

  const handleSendToPortal = () => {
    if (!clickable) return;
    setSendToPortal(true);
    setClickable(false);
  };
  const handleChaseDreamJob = () => {
    if (!clickable) return;
    setChaseDreamJob(true);
    setClickable(false);
  };
  const handleFireballCompleted = () => setFireballCompleted(true);
  const handleShowStateYourWish = (state = false) =>
    setShowStateYourWish(state);
  const handleShowWishComeTrue = (state = true) => setShowWishComeTrue(state);
  const handleUpdateClickable = () => setClickable(true);

  const handleRestBallState = () => {
    setSendToPortal(false);
    setChaseDreamJob(false);
    setClickable(false);
    setFireballCompleted(false);
    setShowStateYourWish(false);
    setShowWishComeTrue(false);
  };

  const ballState = {
    chaseDreamJob,
    sendToPortal,
    fireballCompleted,
    clickable,
    showStateYourWish,
    showWishComeTrue,
  };

  const ballAction = {
    handleChaseDreamJob,
    handleSendToPortal,
    handleUpdateClickable,
    handleFireballCompleted,
    handleShowStateYourWish,
    handleShowWishComeTrue,
  };

  return (
    <BallStateContext.Provider value={ballState}>
      <BallActionContext.Provider value={ballAction}>
        <ResetBallStateContext.Provider value={handleRestBallState}>
          {children}
        </ResetBallStateContext.Provider>
      </BallActionContext.Provider>
    </BallStateContext.Provider>
  );
}
