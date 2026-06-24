import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "./Typewriter";
import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];

function BirthdayPage() {
  const [showMainMessage, setShowMainMessage] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainMessage(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

  if (!showGallery) return;

  const interval = setInterval(() => {

    setCurrentPhoto(prev => {

      if (prev < photos.length - 1) {
  return prev + 1;
}

setTimeout(() => {
  setShowGallery(false);
setShowEnding(true);
}, 10000);

return prev;

    });

  }, 4000);

  return () => clearInterval(interval);

}, [showGallery]);

  return (
    <section className="message-screen">

      <AnimatePresence mode="wait">

        {!showMainMessage ? (

          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="message-arrived">
               رسالة واردة 📩
            </h2>

            <Typewriter
              speed={50}
              text={`أبي...

قبل أن أقول "كل عام وأنت بخير"

هناك شيء أريد أن أخبرك به.`}
            />
          </motion.div>

        ) : (

          <motion.div
            key="message"
            className="main-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >

            <h1>إلى أبي الغالي 🤍</h1>

            <p>
              أبي الغالي محمد عبرين،
            </p>

            <p>
              في هذه الليلة المميزة لا أريد أن أقول فقط
              "كل عام وأنت بخير".
            </p>

            <p>
              أريد أن أشكرك...
            </p>

            <p>
              لأنك كنت الأمان عندما خفت،
              والقوة عندما ضعفت،
              والسند عندما احتجت من يمسك بيدي.
            </p>

            <p>
              وجودك في حياتي نعمة أحمد الله عليها كل يوم.
            </p>

            <p>
              وأسأل الله أن يرزقك الصحة والسعادة
              وأن يجعل أيامك القادمة أجمل من كل ما مضى.
            </p>

            <p className="signature">
              ابنتك 🤍
              <br />
              ملاك
            </p>

            <button
  className="memory-btn"
  onClick={() => setShowGallery(true)}
>
  📸 افتح صندوق الذكريات
</button>

          </motion.div>

        )}

      </AnimatePresence>
{showGallery && (

  <motion.div
    className="gallery-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >

    <motion.img
      key={currentPhoto}
      src={photos[currentPhoto]}
      className="memory-photo"
      initial={{
        opacity: 0,
        scale: 1.1
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
    />

    {currentPhoto === photos.length - 1 && (
      <motion.div
        className="last-photo-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        أبي الغالي،

        مهما كبرنا وتغيرت الأيام، سيبقى في قلوبنا شعور واحد لا يتغير...

        أنك السند الذي نستند إليه، والأمان الذي نلجأ إليه، وأننا دائماً بجانبك كما كنت دائماً بجانبنا ❤️
      </motion.div>
    )}

  </motion.div>

)}
{showEnding && (
  <motion.div
    className="ending-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <div className="ending-content">

      <div className="cake">🎂</div>

      <h1>Happy Birthday</h1>

      <h2>🤍My Dad🤍</h2>

      <div className="age">48</div>

      <p>
        كل عام وأنت بخير يا أبي 🤍
      </p>

      <p>
        شكراً لكل لحظة أمان،
        ولكل نصيحة،
        ولكل دعاء،
        ولكل حب منحته لنا.
      </p>

      <p>
        أسأل الله أن يرزقك
        الصحة والسعادة
        وأن يجعل أيامك القادمة
        أجمل من كل ما مضى.
      </p>

      <p className="love">
        أحبك يا تاج راسي 🤍
      </p>

    </div>
  </motion.div>
)}

    </section>
  );
}

export default BirthdayPage;