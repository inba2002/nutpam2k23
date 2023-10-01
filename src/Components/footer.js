import "../Components/footer.css";

export default function Footer() {
  return (
    <div className="">
      <div className="flex  items-end justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="250"
          viewBox="0 0 177 162"
          fill="none"
        >
          <path
            d="M72.7615 44.6915L76.3518 51.0248L85.2077 0L72.7615 34.1759V44.6915Z"
            fill="white"
          />
          <path
            d="M76.5916 71.5681L88.2 89.6207L100.527 71.5681L88.2599 7.16846L76.5916 71.5681Z"
            fill="#55F2D4"
          />
          <path
            d="M61.9924 71.8099L88.2013 110.407L115.008 71.8099L108.785 62.8477L105.434 52.332L100.887 56.1559L103.52 71.8099L88.2013 95.3506L73.4812 71.8099L75.396 56.1559L71.5664 52.332L68.3352 62.8477L61.9924 71.8099Z"
            fill="white"
          />
          <path
            d="M32.5856 139.481L57.5627 104.447L63.1875 113.289L32.5856 139.481Z"
            fill="#55F2D4"
          />
          <path
            d="M100.647 102.287L92.3899 114.237V134.79L177 161.318L151.868 122.721L142.294 119.017L129.728 112.086L154.501 151.998L109.743 113.64L121.71 92.9667L114.29 81.4951L108.426 90.8158L111.897 100.614L100.647 126.187V102.287Z"
            fill="white"
          />
          <path
            d="M23.6957 123.562L0 161.323L84.0119 134.795V114.003L76.3527 103.248L74.1985 123.562L65.3426 100.141L69.1721 91.7763L61.9916 81.2606L54.5718 93.4492L67.4967 114.003L22.0202 151.046L45.9552 112.808L34.9451 119.26L23.6957 123.562Z"
            fill="white"
          />
          <path
            d="M104.117 45.885L100.527 52.2183L91.671 1.19348L104.117 35.3694V45.885Z"
            fill="white"
          />
          <path
            d="M142.785 138.434L117.999 105.28L113.571 113.166L142.785 138.434Z"
            fill="#55F2D4"
          />
        </svg>
        <div className="footer-bg w-4/5 flex text-lg flex-col items-start gap-5 p-10">
          <h1 className="font-bold text-white ">For Queries</h1>
          <div className="text-white flex  gap-5">
            <div className="flex flex-col gap-5 px-10">
              <h1 className="">Student Coordinators:</h1>

              <div className="flex flex-col gap-5">
                <div>
                  <h1>
                    Vasanth Priyadarshan :{" "}
                    <a href="tel:+919080663133">90806 63133</a>
                  </h1>
                </div>
                <div>
                  <h1>
                    Sownthararaaj S :{" "}
                    <a href="tel:+919362946267">93629 46267</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="md:flex flex-col gap-5 px-10">
              <h1 className="">Staff In-charge</h1>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="">
                    Pathmanaban :{" "}
                    <a href="tel:+919751595403">97515 95403</a>
                  </h1>
                </div>
                <div>
                  <h1>
                    Sownthararaaj S :{" "}
                    <a href="tel:+919362946267">93629 46267</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
