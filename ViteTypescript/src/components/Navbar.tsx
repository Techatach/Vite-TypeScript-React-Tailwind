// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <nav className="self-center w-full max-w-7xl shadow-lg p-3 mb-5 bg-white rounded">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <Link to="/">
              <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
                รัฐประศาสนศาสตร์
              </h1>
            </Link>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/team">เกี่ยวกับ</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/post">ทีมงานบริหาร</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/ai">เทคโนโลยี AI</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/contact">ติดต่อ</a>
              </li>

              <li className="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <a href="/login">LogIn</a>
              </li>
              <li className="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>
            <div className=" text-center text-base pr-5  inline-flex">
              {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-google"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10">
            <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
              <div className="text-3xl font-bold text-green-950">
                หลักสูตรรัฐประศานศาสตร์ คณะศิลปศาสตร์และวิทยาการจัดการ
                มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
              </div>
              <div className="text-xl font-semibold text-blue-950 ">
                ความเป็นรัฐบาลดิจิทัลและเทคโนโลยี AI
              </div>
              <div className="md:text-lg">
                <input
                  className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-2xl placeholder-slate-400 px-4 py-1 focus:outline-none "
                  type="email"
                  placeholder="E-mail Address"
                />
                <button className="p-1 m-2 rounded-2xl text-white bg-blue-500 px-4 font-semibold  hover:bg-blue-900 hover:trandform ease-in-out duration-300">
                  Subscribe{" "}
                </button>
              </div>
            </div>
            <div className="w-3/4 h-60 md:h-96 my-4  rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/500x400/?cryptocurrency,electricity"
                className="h-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
};

export default Navbar;
