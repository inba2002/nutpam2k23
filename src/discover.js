import Discovers from "./Assets/discover.png";


export default function Discover() {
  return (
    <div className="flex items-center justify-center w-screen p-10">
      <div className="md:flex items-center justify-center">
        <img src={Discovers} className="md:w-1/4"></img>
        <p className="md:text-2xl md:w-1/2 indent-8 text-white text-justify">
          Nutpam 2k22 is created with the theme of “The Mighty Ocean”. With a
          simple, yet intriguing theme, we are obliged to make an indulging
          knowledge pool for all the engineers, just like the mighty ocean with
          exciting and innovative events designed to be fun, entertaining, and
          hectic at the same time.{" "}
        </p>
      </div>
    </div>
  );
}
