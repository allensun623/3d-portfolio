import { createContext, useContext, useState } from 'react';

const BallStateContext = createContext();
const BallActionContext = createContext();
const ResetBallStateContext = createContext();

export function useBallState() {
  return useContext(BallStateContext);
}

export function useBallAction() {
  return useContext(BallActionContext);
}

export function useBallStateReset() {
  return useContext(ResetBallStateContext);
}

export function FourStarBallContext({ children }) {
  const [sendToPortal, setSendToPortal] = useState(false);
  const [chaseDreamJob, setChaseDreamJob] = useState(false);
  const handleSendToPortal = () => setSendToPortal(true);
  const handleChaseDreamJob = () => {
    console.log({ chaseDreamJob });
    setChaseDreamJob(true);
  };
  const handleRestBallState = () => {
    setSendToPortal(false);
    setChaseDreamJob(false);
  };
  const ballState = { chaseDreamJob, sendToPortal };
  const ballAction = { handleChaseDreamJob, handleSendToPortal };

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
