import Navbar from "../components/Navbar"
import RegisterForm from "../components/RegisterForm"

const Register = () => {
    return (
        <div className="flex min-h-screen w-screen flex-col items-center bg-[#fffdf3]">
            <header className="flex w-screen justify-center border border-b-[#3A35411F] bg-white">
                <Navbar />
            </header>
            <main className="flex h-full max-h-full w-full max-w-[360px] flex-col items-center justify-center gap-[24px] px-[20px] py-[28px] sm:max-w-[1440px] sm:gap-[36px] sm:px-[120px] sm:py-[64px]">
                <RegisterForm />
            </main>
        </div>
    )
}

export default Register
