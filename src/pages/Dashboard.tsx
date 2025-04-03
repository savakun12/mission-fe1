import Banner from "../components/Banner"
import Course from "../components/Course"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Login = () => {
    return (
        <div className="flex w-screen flex-col items-center bg-[#fffdf3]">
            <header className="flex w-screen justify-center border border-b-[#3A35411F] bg-white">
                <Navbar />
            </header>
            <main className="flex h-auto w-full max-w-[360px] flex-col items-center gap-[24px] px-[20px] py-[28px] sm:w-[1440px] sm:max-w-full sm:gap-[64px] sm:px-[120px] sm:py-[64px]">
                <Hero />
                <Course />
                <Banner />
            </main>
            <footer className="flex w-screen justify-center border border-t-[#3A35411F] bg-white">
                <Footer />
            </footer>
        </div>
    )
}

export default Login
