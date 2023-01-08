import { forwardRef, useCallback, useEffect, useRef, useImperativeHandle, useState } from "react";

const CountDown = forwardRef(({
  count,
  text,
  onTimesUp,
}) => {
  const COUNT_MS = 10000;
  const [counter, setCounter] = useState(COUNT_MS);
  const counterRunning = useRef(false);
  const timerRunning = useRef(false);
  const lastTime = useRef(Date.now());

  const onTimerEnd = () => {
    onTimesUp()
  };
  const handleStopCounter = () => {
    counterRunning.current = false;
  };
  const handleStopTimer = () => {
    timerRunning.current = false;
  };
  const handleStart = () => {
    lastTime.current = Date.now();
    setCounter(COUNT_MS);
    counterRunning.current = true;
    timerRunning.current = true;
  };
  useImperativeHandle(count, () => ({
    getCount() {
      return counter;
    },
    start() {
      handleStart();
    },
    stopCountdown() {
      handleStopCounter();
      return counter;
    },
    stopTimer() {
      handleStopTimer();
      return counter;
    },
    stopAll() {
      handleStopCounter();
      handleStopTimer();
      return counter;
    },
    stopAllZero() {
      handleStopCounter();
      handleStopTimer();
      setCounter(0);
      return 0;
    },
    stopAllMax() {
      handleStopCounter();
      handleStopTimer();
      setCounter(COUNT_MS);
      return COUNT_MS;
    }
  }));
  const UpdateCounter = useCallback((newTime) => {
    if (counterRunning.current) {
      setCounter(COUNT_MS - (newTime - lastTime.current));
      if (COUNT_MS - (newTime - lastTime.current) < 0) {
        setCounter(0);
      }
    }
  }, []);
  const UpdateTimer = useCallback((newTime) => {
    if (timerRunning.current) {
      if (COUNT_MS - (newTime - lastTime.current) < 0) {
        onTimerEnd();
        timerRunning.current = false;
        setCounter(0)
      }
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = Date.now();
      UpdateCounter(newTime);
      UpdateTimer(newTime);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [UpdateCounter, UpdateTimer]);
  return (
    <div className="inner_div">
      <div ref={count} id="count" className="text_large">
        {counter}
      </div>
      <div className="subtext">{text}</div>
    </div>
  );
});

export default CountDown;