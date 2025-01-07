/* eslint-disable react/prop-types */
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonCountdown = ({ marathonStartDate }) => {
  const startDate = new Date(marathonStartDate).getTime();
  const now = Date.now();
  const remainingTime = Math.max(startDate - now, 0); 

  return (
    <div className="flex justify-center items-center">
      <CountdownCircleTimer
        isPlaying
        duration={Math.floor(remainingTime / 1000)} 
        colors={["#EF798A", "#F9A826", "#A5D6A7", "#81C784"]}
        colorsTime={[86400, 3600, 60, 0]} 
        onComplete={() => ({ shouldRepeat: false })}
      >
        {({ remainingTime }) => {
          const days = Math.floor(remainingTime / (60 * 60 * 24));
          const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((remainingTime % (60 * 60)) / 60); 
          return (
            <div className="text-center text-lg">
              <p>{days}d {hours}h {minutes}m</p> 
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default MarathonCountdown;
