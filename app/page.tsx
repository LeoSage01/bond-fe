import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Image from "next/image";
import IMG1 from "./assets/phone.png";
import IMG2 from "./assets/pphn.png";
import IMG3 from "./assets/ppp.png";

import Frame from "./assets/frame1.png";
import Frame2 from "./assets/frame2.png";
import Frame3 from "./assets/frame3.png";

import Btn from "./assets/btnn.png";
import Btn2 from "./assets/btnn1.png";

import Use from "./assets/realme.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="bg-light ">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between px-2 container pt-6">
          <div className="px-6 sm:mt-4 ">
            <h3 className="text-3xl font-extrabold text-center mb-4 xl:text-5xl">
              Take <span className="text-primary">Control</span> of Your{" "}
              <span className="text-primary">Finance</span>
            </h3>
            <p className="small text-center mb-4">
              Bond is a FinTech app that's making waves in the financial
              industry. It's a one-stop shop for all your financial needs. Bond
              gives you freedom and control Over your money. Enjoy abetter life
              with Bond!{" "}
            </p>
            <div className="flex space-x-6 mx-auto w-[250px] lg:w-[300px] sm:justify-between my-8">
              <Link href="#">
                <Image
                  className="w-[100px]"
                  src={Btn}
                  alt="Google Play button"
                  quality={100}
                />
              </Link>
              <Link href="#">
                <Image
                  className="w-[100px]"
                  src={Btn2}
                  alt="App store button"
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <Image
            className="w-[300px] md:w-[450px] lg:w-[500px] 2xl:w-[700px]"
            src={IMG1}
            alt="phone image"
            quality={100}
          />
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="flex flex-col items-center sm:space-x-8 sm:flex-row sm:justify-between px-2 md:px-16 lg:px-40 container">
          <Image
            className="hidden sm:block w-[450px] lg:w-[500px] 2xl:w-[700px]"
            src={IMG2}
            alt="phone image"
            quality={100}
          />

          <div className="mb-4 sm:mb-0 sm:w-[250px]  text-center">
            <h4 className="text-xl font-extrabold mb-6 2xl:text-3xl ">Free Bank Transfers</h4>
            <p className="small max-w-[190px] xl:max-w-[220px] mx-auto">
              Enjoy free and fast bank transfers with 100% success rate to all
              banks across Nigeria.
            </p>
          </div>

          <Image
            className="block sm:hidden w-[450px]"
            src={IMG3}
            alt="phone image"
            quality={100}
          />
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="flex flex-col items-center md:space-x-8 md:flex-row justify-between px-6 md:px-16 lg:px-40 container">
          <div className="w-[200px] xl:w-[300px] flex flex-col">
            <h5 className="text-center font-extrabold 2xl:text-3xl">
              Top-up Airtime and Data
            </h5>
            <Image
              className="my-4 mx-auto w-[200px]"
              src={Frame}
              alt="phone image"
              quality={100}
            />
            <p className="small text-center">
              Get airtime and data bundle at a discounted price in a few seconds
            </p>
          </div>

          <div className="my-12 md:my-0 w-[200px] xl:w-[300px] flex flex-col">
            <h5 className="text-center font-extrabold 2xl:text-3xl">Cable Subsciption</h5>
            <Image
              className="my-6 mx-auto w-[350px]"
              src={Frame2}
              alt="phone image"
              quality={100}
            />
            <p className="small text-center">
              Get premium entertainment by recharging your cable at your
              fingertip
            </p>
          </div>

          <div className="w-[200px] xl:w-[300px] flex flex-col">
            <h5 className="text-center font-extrabold 2xl:text-3xl">Electricity Bills</h5>
            <Image
              className="my-4 mx-auto w-[200px]"
              src={Frame3}
              alt="phone image"
              quality={100}
            />
            <p className="small text-center">
              Keep your meter recharged and enjoy current power supply in your
              homes/offices
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="flex flex-col items-center sm:flex-row px-6 md:px-16 lg:px-40 justify-between container">
          <div className="text-center w-[300px] my-auto">
            <h5 className="text-xl font-bold 2xl:text-3xl">
              Bulk and Multiple Transactions
            </h5>
            <p className="small mt-6 px-2">
              You can process multiple transaction at a goal, saving you time
              and simplifying your workflow
            </p>
          </div>

          <Image className="2xl:w-[500px] " src={Use} alt="phone image" width={250} quality={100} />
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 sm:justify-between px-6 md:px-16 lg:px-40 container">
          <div className=" sm:w-[250px] md:w-[300px] xl:w-[500px] flex flex-col justify-between text-center">
            <h4 className="text-xl font-extrabold 2xl:text-3xl">
              {" "}
              We Are <span className="text-primary">Always</span> Here For You
            </h4>
            <p className="mt-4 small">
              Our great Customer Support features ensures that you’ll receive
              time timely and personalized assistance from our friendly and
              experienced team.
            </p>
          </div>

          <div className="bg-light mt-12 sm:mt-0 w-[250px] md:w-[300px] xl:w-[500px] flex flex-col justify-center items-center text-center">
            <h4 className="text-xl font-extrabold text-primary 2xl:text-3xl">
              Download the Bond App
            </h4>
            <p className="mt-4 small">
              Register and start transacting in less than 2 minutes
            </p>
            <div className="flex w-full justify-between mt-4">
              <Link href="#">
                <Image
                  src={Btn}
                  alt="Google Play button"
                  width={100}
                  quality={100}
                />
              </Link>
              <Link href="#">
                <Image
                  src={Btn2}
                  alt="App store button"
                  width={100}
                  quality={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
