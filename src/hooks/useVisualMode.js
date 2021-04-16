import { useState } from 'react';
// take in an initial mode
// set mode state with initial mode provided
// return an object with mode property

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode((prev) => newMode)
      let replaceHistory = [...history];
      replaceHistory[replaceHistory.length - 1] = mode;
      setHistory((prev) => replaceHistory);
    } else {
      setMode((prev) => newMode);
      let newHistory = [...history];
      newHistory.push(newMode);
      setHistory((prev) => newHistory);
    }
  };

  // call back to return to previous mode
  const back = () => {
     let newHistory = [...history];
    newHistory.pop(mode);
    setHistory((prev) => newHistory);
    if (history.length > 1) {
      setMode((prev) => newHistory[(newHistory.length - 1)]);
    }
  };

  return { mode, transition, back }
}

export default useVisualMode;