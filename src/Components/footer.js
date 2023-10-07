import "../Components/footer.css";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import "../Assets/quest.svg";
import "../App.css";

export default function Footer() {
  return (
    <div className="w-screen h-full flex items-center justify-center">
      <div className="md:mr-[-9.5rem] mr-[-1.5rem]">
        <div className="flex items-center md:w-full w-32 md:m-0  justify-center">
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
        </div>
        <div className="z-20 md:w-full w-32 flex items-center justify-center">
          <svg
            width="115"
            height="10"
            viewBox="0 0 115 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.13211 7.16H4.01211C3.85211 7.49333 3.62878 7.74 3.34211 7.9C3.06211 8.06 2.76544 8.14 2.45211 8.14C2.12544 8.14 1.82211 8.08667 1.54211 7.98C1.26211 7.86667 1.01544 7.70333 0.802109 7.49C0.595443 7.27 0.432109 7.00333 0.312109 6.69C0.192109 6.37667 0.132109 6.01333 0.132109 5.6V5.44C0.132109 5.03333 0.192109 4.67333 0.312109 4.36C0.432109 4.04667 0.595443 3.78333 0.802109 3.57C1.01544 3.35 1.26211 3.18333 1.54211 3.07C1.82211 2.95667 2.11878 2.9 2.43211 2.9C2.77211 2.9 3.07878 2.97667 3.35211 3.13C3.63211 3.27667 3.85211 3.50667 4.01211 3.82H4.13211V3.04H4.91211V6.98C4.91211 7.18 5.00211 7.28 5.18211 7.28H5.43211V8H4.90211C4.67544 8 4.48878 7.92667 4.34211 7.78C4.20211 7.63333 4.13211 7.44667 4.13211 7.22V7.16ZM2.53211 7.4C2.76544 7.4 2.97878 7.35667 3.17211 7.27C3.37211 7.18333 3.54211 7.06 3.68211 6.9C3.82211 6.74 3.93211 6.55 4.01211 6.33C4.09211 6.10333 4.13211 5.85333 4.13211 5.58V5.46C4.13211 5.19333 4.09211 4.95 4.01211 4.73C3.93211 4.50333 3.81878 4.31 3.67211 4.15C3.53211 3.99 3.36211 3.86667 3.16211 3.78C2.96878 3.68667 2.75878 3.64 2.53211 3.64C2.29878 3.64 2.08544 3.68333 1.89211 3.77C1.69878 3.85667 1.52878 3.98 1.38211 4.14C1.24211 4.29333 1.13211 4.48333 1.05211 4.71C0.972109 4.93 0.932109 5.17333 0.932109 5.44V5.6C0.932109 6.16667 1.07878 6.61 1.37211 6.93C1.67211 7.24333 2.05878 7.4 2.53211 7.4ZM7.43516 8H6.65516V3.04H7.43516V3.88H7.55516C7.86182 3.22667 8.39516 2.9 9.15516 2.9C9.72849 2.9 10.1852 3.08 10.5252 3.44C10.8652 3.79333 11.0352 4.32667 11.0352 5.04V8H10.2552V5.2C10.2552 4.68 10.1385 4.29 9.90516 4.03C9.67182 3.77 9.35516 3.64 8.95516 3.64C8.48182 3.64 8.10849 3.80333 7.83516 4.13C7.56849 4.45 7.43516 4.88 7.43516 5.42V8ZM20.4413 1.56C20.4413 1.36667 20.5079 1.20333 20.6413 1.07C20.7813 0.93 20.9479 0.86 21.1413 0.86C21.3346 0.86 21.4979 0.93 21.6313 1.07C21.7713 1.20333 21.8413 1.36667 21.8413 1.56C21.8413 1.75333 21.7713 1.92 21.6313 2.06C21.4979 2.19333 21.3346 2.26 21.1413 2.26C20.9479 2.26 20.7813 2.19333 20.6413 2.06C20.5079 1.92 20.4413 1.75333 20.4413 1.56ZM19.0213 7.28H20.7613V3.76H19.2013V3.04H21.5413V7.28H23.1613V8H19.0213V7.28ZM25.8043 8H25.0243V3.04H25.8043V3.88H25.9243C26.231 3.22667 26.7643 2.9 27.5243 2.9C28.0976 2.9 28.5543 3.08 28.8943 3.44C29.2343 3.79333 29.4043 4.32667 29.4043 5.04V8H28.6243V5.2C28.6243 4.68 28.5076 4.29 28.2743 4.03C28.041 3.77 27.7243 3.64 27.3243 3.64C26.851 3.64 26.4776 3.80333 26.2043 4.13C25.9376 4.45 25.8043 4.88 25.8043 5.42V8ZM31.9273 8H31.1473V3.04H31.9273V3.88H32.0473C32.354 3.22667 32.8873 2.9 33.6473 2.9C34.2207 2.9 34.6773 3.08 35.0173 3.44C35.3573 3.79333 35.5273 4.32667 35.5273 5.04V8H34.7473V5.2C34.7473 4.68 34.6307 4.29 34.3973 4.03C34.164 3.77 33.8473 3.64 33.4473 3.64C32.974 3.64 32.6007 3.80333 32.3273 4.13C32.0607 4.45 31.9273 4.88 31.9273 5.42V8ZM41.9504 5.58C41.9504 5.99333 41.8804 6.36 41.7404 6.68C41.6071 6.99333 41.4271 7.26 41.2004 7.48C40.9737 7.69333 40.7071 7.85667 40.4004 7.97C40.1004 8.08333 39.7871 8.14 39.4604 8.14C39.1271 8.14 38.8104 8.08333 38.5104 7.97C38.2104 7.85667 37.9471 7.69333 37.7204 7.48C37.4937 7.26 37.3104 6.99333 37.1704 6.68C37.0371 6.36 36.9704 5.99333 36.9704 5.58V5.46C36.9704 5.05333 37.0371 4.69333 37.1704 4.38C37.3104 4.06 37.4937 3.79 37.7204 3.57C37.9537 3.35 38.2204 3.18333 38.5204 3.07C38.8204 2.95667 39.1337 2.9 39.4604 2.9C39.7871 2.9 40.1004 2.95667 40.4004 3.07C40.7004 3.18333 40.9637 3.35 41.1904 3.57C41.4237 3.79 41.6071 4.06 41.7404 4.38C41.8804 4.69333 41.9504 5.05333 41.9504 5.46V5.58ZM39.4604 7.4C39.7004 7.4 39.9204 7.36 40.1204 7.28C40.3271 7.19333 40.5071 7.07 40.6604 6.91C40.8137 6.75 40.9337 6.56 41.0204 6.34C41.1071 6.11333 41.1504 5.86 41.1504 5.58V5.46C41.1504 5.19333 41.1071 4.95 41.0204 4.73C40.9337 4.50333 40.8137 4.31 40.6604 4.15C40.5071 3.99 40.3271 3.86667 40.1204 3.78C39.9137 3.68667 39.6937 3.64 39.4604 3.64C39.2271 3.64 39.0071 3.68667 38.8004 3.78C38.5937 3.86667 38.4137 3.99 38.2604 4.15C38.1071 4.31 37.9871 4.50333 37.9004 4.73C37.8137 4.95 37.7704 5.19333 37.7704 5.46V5.58C37.7704 5.86 37.8137 6.11333 37.9004 6.34C37.9871 6.56 38.1071 6.75 38.2604 6.91C38.4137 7.07 38.5904 7.19333 38.7904 7.28C38.9971 7.36 39.2204 7.4 39.4604 7.4ZM46.3434 8H44.8034L43.0734 3.04H43.9934L45.5134 7.64H45.6334L47.1534 3.04H48.0734L46.3434 8ZM53.1165 7.16H52.9965C52.8365 7.49333 52.6132 7.74 52.3265 7.9C52.0465 8.06 51.7498 8.14 51.4365 8.14C51.1098 8.14 50.8065 8.08667 50.5265 7.98C50.2465 7.86667 49.9998 7.70333 49.7865 7.49C49.5798 7.27 49.4165 7.00333 49.2965 6.69C49.1765 6.37667 49.1165 6.01333 49.1165 5.6V5.44C49.1165 5.03333 49.1765 4.67333 49.2965 4.36C49.4165 4.04667 49.5798 3.78333 49.7865 3.57C49.9998 3.35 50.2465 3.18333 50.5265 3.07C50.8065 2.95667 51.1032 2.9 51.4165 2.9C51.7565 2.9 52.0632 2.97667 52.3365 3.13C52.6165 3.27667 52.8365 3.50667 52.9965 3.82H53.1165V3.04H53.8965V6.98C53.8965 7.18 53.9865 7.28 54.1665 7.28H54.4165V8H53.8865C53.6598 8 53.4732 7.92667 53.3265 7.78C53.1865 7.63333 53.1165 7.44667 53.1165 7.22V7.16ZM51.5165 7.4C51.7498 7.4 51.9632 7.35667 52.1565 7.27C52.3565 7.18333 52.5265 7.06 52.6665 6.9C52.8065 6.74 52.9165 6.55 52.9965 6.33C53.0765 6.10333 53.1165 5.85333 53.1165 5.58V5.46C53.1165 5.19333 53.0765 4.95 52.9965 4.73C52.9165 4.50333 52.8032 4.31 52.6565 4.15C52.5165 3.99 52.3465 3.86667 52.1465 3.78C51.9532 3.68667 51.7432 3.64 51.5165 3.64C51.2832 3.64 51.0698 3.68333 50.8765 3.77C50.6832 3.85667 50.5132 3.98 50.3665 4.14C50.2265 4.29333 50.1165 4.48333 50.0365 4.71C49.9565 4.93 49.9165 5.17333 49.9165 5.44V5.6C49.9165 6.16667 50.0632 6.61 50.3565 6.93C50.6565 7.24333 51.0432 7.4 51.5165 7.4ZM55.4695 3.04H57.0295V1H57.8095V3.04H59.7295V3.76H57.8095V6.98C57.8095 7.18 57.8995 7.28 58.0795 7.28H59.4895V8H57.7995C57.5729 8 57.3862 7.92667 57.2395 7.78C57.0995 7.63333 57.0295 7.44667 57.0295 7.22V3.76H55.4695V3.04ZM63.3026 1.56C63.3026 1.36667 63.3692 1.20333 63.5026 1.07C63.6426 0.93 63.8092 0.86 64.0026 0.86C64.1959 0.86 64.3592 0.93 64.4926 1.07C64.6326 1.20333 64.7026 1.36667 64.7026 1.56C64.7026 1.75333 64.6326 1.92 64.4926 2.06C64.3592 2.19333 64.1959 2.26 64.0026 2.26C63.8092 2.26 63.6426 2.19333 63.5026 2.06C63.3692 1.92 63.3026 1.75333 63.3026 1.56ZM61.8826 7.28H63.6226V3.76H62.0626V3.04H64.4026V7.28H66.0226V8H61.8826V7.28ZM70.8356 8H69.2956L67.5656 3.04H68.4856L70.0056 7.64H70.1256L71.6456 3.04H72.5656L70.8356 8ZM74.5787 5.76C74.5987 6.25333 74.752 6.65 75.0387 6.95C75.3253 7.25 75.7253 7.4 76.2387 7.4C76.472 7.4 76.6753 7.37333 76.8487 7.32C77.022 7.26667 77.1687 7.19333 77.2887 7.1C77.4153 7.00667 77.5153 6.9 77.5887 6.78C77.6687 6.65333 77.732 6.52 77.7787 6.38L78.5187 6.58C78.3787 7.04 78.1187 7.41667 77.7387 7.71C77.3653 7.99667 76.8587 8.14 76.2187 8.14C75.8653 8.14 75.5387 8.08 75.2387 7.96C74.9453 7.83333 74.692 7.65667 74.4787 7.43C74.2653 7.20333 74.0987 6.93333 73.9787 6.62C73.8587 6.30667 73.7987 5.96 73.7987 5.58V5.34C73.7987 4.99333 73.8587 4.67 73.9787 4.37C74.1053 4.07 74.2787 3.81333 74.4987 3.6C74.7187 3.38 74.9753 3.21 75.2687 3.09C75.5687 2.96333 75.892 2.9 76.2387 2.9C76.6453 2.9 76.9953 2.97667 77.2887 3.13C77.5887 3.27667 77.832 3.46 78.0187 3.68C78.212 3.9 78.352 4.14 78.4387 4.4C78.532 4.66 78.5787 4.9 78.5787 5.12V5.76H74.5787ZM76.2387 3.64C76.0187 3.64 75.812 3.67667 75.6187 3.75C75.432 3.81667 75.2653 3.91333 75.1187 4.04C74.9787 4.16667 74.862 4.31667 74.7687 4.49C74.682 4.65667 74.6253 4.84 74.5987 5.04H77.7987C77.7853 4.82667 77.732 4.63333 77.6387 4.46C77.552 4.28667 77.4353 4.14 77.2887 4.02C77.1487 3.9 76.9853 3.80667 76.7987 3.74C76.6187 3.67333 76.432 3.64 76.2387 3.64ZM90.0548 7.24H89.9348C89.8481 7.39333 89.7414 7.52667 89.6148 7.64C89.4948 7.74667 89.3614 7.84 89.2148 7.92C89.0748 7.99333 88.9248 8.04667 88.7648 8.08C88.6114 8.12 88.4614 8.14 88.3148 8.14C87.9814 8.14 87.6714 8.08333 87.3848 7.97C87.0981 7.85667 86.8448 7.69333 86.6248 7.48C86.4114 7.26667 86.2414 7.00333 86.1148 6.69C85.9948 6.37 85.9348 6.00667 85.9348 5.6V5.44C85.9348 5.04 85.9981 4.68333 86.1248 4.37C86.2514 4.05 86.4214 3.78333 86.6348 3.57C86.8481 3.35 87.0981 3.18333 87.3848 3.07C87.6714 2.95667 87.9748 2.9 88.2948 2.9C88.6348 2.9 88.9481 2.98 89.2348 3.14C89.5281 3.29333 89.7614 3.52 89.9348 3.82H90.0548V3.04H90.8348V10H90.0548V7.24ZM88.3948 7.4C88.6281 7.4 88.8448 7.35667 89.0448 7.27C89.2448 7.18333 89.4181 7.06 89.5648 6.9C89.7181 6.74 89.8381 6.55 89.9248 6.33C90.0114 6.10333 90.0548 5.85333 90.0548 5.58V5.46C90.0548 5.19333 90.0114 4.95 89.9248 4.73C89.8381 4.50333 89.7181 4.31 89.5648 4.15C89.4181 3.99 89.2414 3.86667 89.0348 3.78C88.8348 3.68667 88.6214 3.64 88.3948 3.64C88.1614 3.64 87.9414 3.68333 87.7348 3.77C87.5348 3.85667 87.3581 3.98 87.2048 4.14C87.0581 4.3 86.9414 4.49 86.8548 4.71C86.7748 4.93 86.7348 5.17333 86.7348 5.44V5.6C86.7348 5.88 86.7748 6.13 86.8548 6.35C86.9414 6.57 87.0581 6.76 87.2048 6.92C87.3581 7.07333 87.5348 7.19333 87.7348 7.28C87.9348 7.36 88.1548 7.4 88.3948 7.4ZM95.9178 3.04H96.6978V8H95.9178V7.1H95.7978C95.6378 7.42 95.4278 7.67333 95.1678 7.86C94.9078 8.04667 94.5778 8.14 94.1778 8.14C93.9045 8.14 93.6511 8.09333 93.4178 8C93.1911 7.91333 92.9945 7.78 92.8278 7.6C92.6678 7.42 92.5411 7.19667 92.4478 6.93C92.3611 6.66333 92.3178 6.35333 92.3178 6V3.04H93.0978V5.9C93.0978 6.42 93.2045 6.8 93.4178 7.04C93.6311 7.28 93.9578 7.4 94.3978 7.4C94.8711 7.4 95.2411 7.24 95.5078 6.92C95.7811 6.59333 95.9178 6.16 95.9178 5.62V3.04ZM99.0709 5.76C99.0909 6.25333 99.2442 6.65 99.5309 6.95C99.8175 7.25 100.218 7.4 100.731 7.4C100.964 7.4 101.168 7.37333 101.341 7.32C101.514 7.26667 101.661 7.19333 101.781 7.1C101.908 7.00667 102.008 6.9 102.081 6.78C102.161 6.65333 102.224 6.52 102.271 6.38L103.011 6.58C102.871 7.04 102.611 7.41667 102.231 7.71C101.858 7.99667 101.351 8.14 100.711 8.14C100.358 8.14 100.031 8.08 99.7309 7.96C99.4375 7.83333 99.1842 7.65667 98.9709 7.43C98.7575 7.20333 98.5909 6.93333 98.4709 6.62C98.3509 6.30667 98.2909 5.96 98.2909 5.58V5.34C98.2909 4.99333 98.3509 4.67 98.4709 4.37C98.5975 4.07 98.7709 3.81333 98.9909 3.6C99.2109 3.38 99.4675 3.21 99.7609 3.09C100.061 2.96333 100.384 2.9 100.731 2.9C101.138 2.9 101.488 2.97667 101.781 3.13C102.081 3.27667 102.324 3.46 102.511 3.68C102.704 3.9 102.844 4.14 102.931 4.4C103.024 4.66 103.071 4.9 103.071 5.12V5.76H99.0709ZM100.731 3.64C100.511 3.64 100.304 3.67667 100.111 3.75C99.9242 3.81667 99.7575 3.91333 99.6109 4.04C99.4709 4.16667 99.3542 4.31667 99.2609 4.49C99.1742 4.65667 99.1175 4.84 99.0909 5.04H102.291C102.278 4.82667 102.224 4.63333 102.131 4.46C102.044 4.28667 101.928 4.14 101.781 4.02C101.641 3.9 101.478 3.80667 101.291 3.74C101.111 3.67333 100.924 3.64 100.731 3.64ZM105.654 4.32C105.654 4.56 105.754 4.74333 105.954 4.87C106.161 4.99667 106.534 5.08 107.074 5.12C107.654 5.16667 108.094 5.30667 108.394 5.54C108.701 5.76667 108.854 6.1 108.854 6.54V6.6C108.854 6.84 108.804 7.05667 108.704 7.25C108.611 7.43667 108.477 7.59667 108.304 7.73C108.137 7.86333 107.931 7.96333 107.684 8.03C107.444 8.10333 107.181 8.14 106.894 8.14C106.507 8.14 106.174 8.09 105.894 7.99C105.621 7.88333 105.391 7.74667 105.204 7.58C105.024 7.40667 104.887 7.21333 104.794 7C104.701 6.78 104.647 6.56 104.634 6.34L105.374 6.16C105.407 6.54 105.554 6.84667 105.814 7.08C106.074 7.30667 106.421 7.42 106.854 7.42C107.221 7.42 107.514 7.35 107.734 7.21C107.961 7.06333 108.074 6.86 108.074 6.6C108.074 6.32 107.964 6.12 107.744 6C107.524 5.88 107.167 5.80333 106.674 5.77C106.101 5.73 105.661 5.59667 105.354 5.37C105.047 5.14333 104.894 4.81333 104.894 4.38V4.32C104.894 4.08667 104.944 3.88333 105.044 3.71C105.144 3.53 105.277 3.38 105.444 3.26C105.617 3.14 105.811 3.05 106.024 2.99C106.237 2.93 106.461 2.9 106.694 2.9C107.021 2.9 107.307 2.94667 107.554 3.04C107.801 3.12667 108.007 3.24333 108.174 3.39C108.341 3.53 108.467 3.69333 108.554 3.88C108.647 4.06667 108.707 4.25333 108.734 4.44L107.994 4.62C107.961 4.3 107.831 4.05 107.604 3.87C107.384 3.69 107.094 3.6 106.734 3.6C106.594 3.6 106.457 3.61667 106.324 3.65C106.197 3.67667 106.084 3.72 105.984 3.78C105.884 3.84 105.804 3.91667 105.744 4.01C105.684 4.09667 105.654 4.2 105.654 4.32ZM110.577 3.04H112.137V1H112.917V3.04H114.837V3.76H112.917V6.98C112.917 7.18 113.007 7.28 113.187 7.28H114.597V8H112.907C112.68 8 112.494 7.92667 112.347 7.78C112.207 7.63333 112.137 7.44667 112.137 7.22V3.76H110.577V3.04Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="footer-bg text-white tex md:m-0 -ml-10 md:flex z-10  w-full">
        <div className=" w-full  rounded-2xl flex flex-col text-lg px-8 py-8 z-10">
          <div className="md:flex items-center md:text-2xl md:px-10  justify-between">
            <p>CONTACT US</p>
            <p className="flex items-center justify-center gap-2 text-md md:text-2xl md:gap-4">
            <HiMail /> <a href="mailto:nutpam.cse@sairamit.edu.in">nutpam.cse@sairamit.edu.in</a>
            </p>
          </div>
          <div className="md:flex md:px-32 items-center justify-between md:p-16">
            <div className="flex flex-col gap-5">
              <p>Student Coordinators:</p>
              <p>Sownthararaaj S</p>
              <div className="flex items-center gap-5">
                <FaPhoneAlt />
                <a href="tel:+919362946267">93629 46267</a>
              </div>
              <p>Vasanth Priyadharshan V</p>
              <div className="flex items-center gap-5">
                <FaPhoneAlt />
                <a href="tel:+919080663133">90806 63133</a>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <p>Staff Coordinators:</p>
                <p>Padhmanaban</p>
                <div className="flex items-center gap-5">
                  <FaPhoneAlt />
                  <a href="tel:+919362946267">93629 46267</a>
                </div>
                <p>Nirmala Devi G</p>
                <div className="flex items-center gap-5">
                  <FaPhoneAlt />
                  <a href="tel:+916381248906">63812 48906</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p>Location</p>
              <div className="w-auto h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.174983123625!2d80.05065757598139!3d12.960652315116374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1696407667524!5m2!1sen!2sin"
                  className="md:w-72 md:h-64 h-48 rounded-lg"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex items-center tex  justify-between p-5 md:px-32">
            <a
              href="https://instagram.com/nutpam_2k23"
              className="items-center justify-center gap-4 text-xl flex"
              target="_blank"
            >
              <AiFillInstagram size={26} />
              <h1 className="italic hidden md:flex ">nutpam_2k23</h1>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086234925239"
              className="items-center justify-center gap-4 text-xl flex"
              target="_blank"
            >
              <BsFacebook size={26} />
              <h1 className="italic hidden md:flex">nutpam_2k23</h1>
            </a>
            <a
              href=""
              className="items-center justify-center gap-4 text-xl flex"
              target="_blank"
            >
              <BsLinkedin size={26} />
              <h1 className="italic hidden md:flex">nutpam_2k23</h1>
            </a>
            <a
              href="https://x.com/Nutpam2k23"
              className="items-center justify-center gap-4 text-xl flex"
              target="_blank"
            >
              <RiTwitterXLine size={26} />
              <h1 className="italic hidden md:flex">nutpam_2k23</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
