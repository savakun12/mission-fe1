import { IoMdEyeOff } from "react-icons/io"

export function InputForm({ label }: { label: string }) {
    return (
        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
            <label
                htmlFor=""
                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
            >
                {label}
                <span className="subtitle font-normal text-[#D32E1F]">*</span>
            </label>
            <div className="flex h-auto max-h-[48px] w-full max-w-[280px] rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[518px]">
                <input
                    type="text"
                    className="h-auto max-h-[40px] w-full max-w-[280px] gap-[8px] py-[8px] sm:max-w-[498px]"
                />
            </div>
        </div>
    )
}

export function PasswordForm({ label }: { label: string }) {
    return (
        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
            <label
                htmlFor=""
                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
            >
                {label}
                <span className="subtitle font-normal text-[#D32E1F]">*</span>
            </label>
            <div className="flex h-auto max-h-[48px] w-full max-w-[280px] items-center rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[518px]">
                <input
                    type="Password"
                    className="h-auto max-h-[40px] w-full max-w-[280px] gap-[8px] py-[8px] sm:max-w-[498px]"
                />
                <button className="flex h-[24px] w-[24px] items-center justify-center">
                    <IoMdEyeOff className="h-[24px] w-[24px] text-[#6C717A]" />
                </button>
            </div>
        </div>
    )
}

export function PhoneNumberForm({ label }: { label: string }) {
    return (
        <div className="h-auto max-h-[76px] w-full max-w-[280px] sm:max-h-[76px] sm:max-w-[518px]">
            <label
                htmlFor=""
                className="body-medium flex h-auto max-h-[28px] w-[110px] gap-[4px] text-nowrap pb-[4px] pr-[16px] font-normal text-[#333333AD]"
            >
                {label}
                <span className="subtitle font-normal text-[#D32E1F]">*</span>
            </label>
            <div className="flex gap-[24px]">
                <div className="flex">
                    <div className="flex h-full max-h-[48px] w-[44px] items-center justify-center rounded-l-[6px] bg-[#F4F5FA] px-[10px] py-[4px]">
                        <img
                            src="flag.svg"
                            alt=""
                            className="h-[24px] w-[24px]"
                        />
                    </div>
                    <div className="flex h-auto max-h-[48px] w-[78px] items-center justify-center rounded-r-[6px] border-[1px] px-[10px] py-[4px] sm:w-[112.67px]">
                        <select
                            name=""
                            id=""
                            className="flex h-auto max-h-[40px] w-[78px] items-center justify-center bg-transparent py-[8px] text-gray-700 focus:outline-none sm:w-[112.67px]"
                        >
                            <option value="+62" selected>
                                +62
                            </option>
                        </select>
                    </div>
                </div>
                <div className="flex h-auto max-h-[48px] w-full max-w-[280px] rounded-[6px] border-[1px] border-[#F1F1F1] px-[10px] py-[4px] sm:max-w-[337.33px]">
                    <input
                        type="number"
                        className="h-auto max-h-[40px] w-full max-w-[280px] appearance-none gap-[8px] py-[8px] sm:max-w-[498px]"
                    />
                </div>
            </div>
        </div>
    )
}
