import { Typewriter } from "react-simple-typewriter";

const Announcement = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white text-[18px] font-semibold h-[30px]  ">
      <Typewriter
        words={["Beauty", "Bliss", "Everything", "On", "Discount", "20% offer"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcement;
