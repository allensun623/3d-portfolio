import { createContext, useContext, useState } from 'react';

const PortalContext = createContext();
const SendToPortalContext = createContext();
const ResetBallStateContext = createContext();

export function useBallState() {
  return useContext(PortalContext);
}

export function useBallUpdate() {
  return useContext(SendToPortalContext);
}

export function useBallStateReset() {
  return useContext(ResetBallStateContext);
}

export function FourStarBallContext({ children }) {
  const [sendToPortal, setSendToPortal] = useState(false);
  const handleSendToPortal = () => setSendToPortal(true);
  const handleRestBallState = () => setSendToPortal(false);

  return (
    <ResetBallStateContext.Provider value={handleRestBallState}>
      <PortalContext.Provider value={sendToPortal}>
        <SendToPortalContext.Provider value={handleSendToPortal}>
          {children}
        </SendToPortalContext.Provider>
      </PortalContext.Provider>
    </ResetBallStateContext.Provider>
  );
}
