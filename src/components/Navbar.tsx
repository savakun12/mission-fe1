import { useLocation } from "react-router"

const Navbar = () => {
    const location = useLocation().pathname
    return (
        <nav className="flex h-auto max-h-[74px] w-full max-w-[360px] items-center bg-white px-[24px] py-[16px] sm:max-h-[80px] sm:w-[1440px] sm:max-w-full sm:gap-[36px] sm:px-[120px] sm:py-[12px]">
            <div className="flex h-auto w-full items-center justify-between sm:max-h-[56px] sm:max-w-[1120px]">
                <div className="flex h-[42px] w-[152px] items-center justify-center sm:h-[56px] sm:w-[237px]">
                    <img
                        src="logo.png"
                        alt="logo"
                        className="left-[3.25px] top-[9.75px] h-[22.56px] w-[144.77px] sm:left-[22px] sm:top-[13px] sm:h-[30.08px] sm:w-[193.03px]"
                    />
                </div>
                <div
                    className={`body-medium hidden text-[#333333AD] sm:block ${
                        location !== "/dashboard" ? "sm:hidden" : "sm:block"
                    }`}
                >
                    Kategori
                </div>
            </div>
            <img
                src="avatar-profile.png"
                alt="avatar-profile"
                className={`hidden h-[44px] w-[44px] rounded-[10px] ${
                    location !== "/dashboard" ? "sm:hidden" : "sm:block"
                }`}
            />
            <div className={`flex h-[24px] w-[24px] items-center sm:hidden`}>
                <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 10.5V12.5H20V10.5H0ZM0 5.5V7.5H20V5.5H0ZM0 0.5V2.5H20V0.5H0Z"
                        fill="#4A505C"
                    />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar
