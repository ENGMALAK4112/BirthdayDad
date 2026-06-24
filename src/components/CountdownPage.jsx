import Countdown from "react-countdown";
import { motion } from "framer-motion";
import bgImage from "../assets/photos/moon-bg.png";

function CountdownPage() {
  const birthdayDate = new Date("2026-06-25T00:00:00");

const renderer = ({ days, hours, minutes, seconds }) => (
  <>
  <div className="days-left">
  ✨ {days} يوم ✨
</div>

    <div className="clock">
      <span>{hours}</span>
      <span className="colon">:</span>

      <span>{minutes}</span>
      <span className="colon">:</span>

      <span>{seconds}</span>
    </div>

    <div className="clock-labels">
      <span>ساعة</span>
      <span>دقيقة</span>
      <span>ثانية</span>
    </div>
  </>
);
  return (
    <section
  className="hero"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
      <div className="moon"></div>

      <div className="stars">
  {[...Array(70)].map((_, i) => (
    <span
      key={i}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></span>
  ))}
</div>

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className="small-text"
>
 بعض الكلمات...
</motion.p>

<motion.h1
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1 }}
>
  إلى أبي
 <br></br>
  🤍 
</motion.h1>

<motion.p
  className="subtitle"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
>
  لا يحق لها أن تصل إلا في منتصف الليل 
</motion.p>
        <Countdown date={birthdayDate} renderer={renderer} />
      </motion.div>
    </section>
  );
}

export default CountdownPage;