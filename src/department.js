import Dept from "./Assets/dept.png"
import './App.css';


export default function Department() {
  return (
    <div className="md:flex w-screen items-center justify-center p-10">
      <div className="md:flex items-center h-full justify-center gap-10">
        <p className="md:text-2xl tex leading-10 md:w-1/2 indent-8 text-white text-justify">
          {" "}
          The Department of <span className="underline underline-offset-6">Computer Science and Engineering</span> is accredited by
          NBA, AICTE and has acquired Autonomous status under Anna University,
          Chennai. The alacrity of the students to learn makes it easier for the
          Department of Computer Science and Engineering to produce top-notch
          Engineers. CSE Department is equipped with 36 well experienced faculty
          and 9 supporting staff.{" "}
        </p>
        <div className="flex items-center justify-center">
        <img src={Dept} className="md:w-80 w-64 flex items-center justify-center"></img>
        </div>
      </div>
    </div>
  );
}
