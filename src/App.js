import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Instructor } from "./pages/Instructor";
import { useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import ScrollToTop from "./components/common/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const upButton = document.getElementById("scroll-up-button");
      const downButton = document.getElementById("scroll-down-button");
      if (window.scrollY > 300) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
      if (
        window.scrollY + window.innerHeight <
        document.documentElement.scrollHeight - 300
      ) {
        downButton.style.display = "block";
      } else {
        downButton.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <ScrollToTop />
                <Home />
                <a href="https://wa.link/02818i" target="blank">
                  <button className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  id="scroll-up-button"
                  onClick={scrollToTop}
                  className="fixed bottom-20 right-5  keyBg text-white  p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
                  style={{ display: "none" }}
                >
                  <FaCaretUp />
                </button>
                <button
                  id="scroll-down-button"
                  onClick={scrollToBottom}
                  className="fixed bottom-5 right-5 keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
                >
                  <FaCaretDown />
                </button>
              </Layout>
            }
          />
          <Route
            path="/recognitions"
            element={
              <Layout>
                <ScrollToTop />
                <About />
                <a href="https://wa.link/02818i" target="blank">
                  <button className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  id="scroll-up-button"
                  onClick={scrollToTop}
                  className="fixed bottom-20 right-5  keyBg text-white  p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
                  style={{ display: "none" }}
                >
                  <FaCaretUp />
                </button>
                <button
                  id="scroll-down-button"
                  onClick={scrollToBottom}
                  className="fixed bottom-5 right-5  keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
                >
                  <FaCaretDown />
                </button>
              </Layout>
            }
          />
          <Route
            path="/job_prospects"
            element={
              <Layout>
                <ScrollToTop />
                <Courses />
                <a href="https://wa.link/02818i" target="blank">
                  <button className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  id="scroll-up-button"
                  onClick={scrollToTop}
                  className="fixed bottom-20 right-5 keyBg text-white  p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
                  style={{ display: "none" }}
                >
                  <FaCaretUp />
                </button>
                <button
                  id="scroll-down-button"
                  onClick={scrollToBottom}
                  className="fixed bottom-5 right-5 keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
                >
                  <FaCaretDown />
                </button>
              </Layout>
            }
          />
          <Route
            path="/fees_structure"
            element={
              <Layout>
                <ScrollToTop />
                <Instructor />
                <a href="https://wa.link/02818i" target="blank">
                  <button className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  id="scroll-up-button"
                  onClick={scrollToTop}
                  className="fixed bottom-20 right-5 keyBg text-white  p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
                  style={{ display: "none" }}
                >
                  <FaCaretUp />
                </button>
                <button
                  id="scroll-down-button"
                  onClick={scrollToBottom}
                  className="fixed bottom-5 right-5 keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
                >
                  <FaCaretDown />
                </button>
              </Layout>
            }
          />
          <Route
            path="/other_courses"
            element={
              <Layout>
                <ScrollToTop />
                <Blog />
                <a href="https://wa.link/02818i" target="blank">
                  <button className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  id="scroll-up-button"
                  onClick={scrollToTop}
                  className="fixed bottom-20 right-5 keyBg text-white  p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
                  style={{ display: "none" }}
                >
                  <FaCaretUp />
                </button>
                <button
                  id="scroll-down-button"
                  onClick={scrollToBottom}
                  className="fixed bottom-5 right-5 keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
                >
                  <FaCaretDown />
                </button>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
