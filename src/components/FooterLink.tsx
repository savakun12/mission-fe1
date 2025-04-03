import { ReactNode } from "react"
import { MdArrowForwardIos } from "react-icons/md"

export function FooterLink({
    label,
    children,
}: {
    label: string
    children: ReactNode
}) {
    return (
        <div className="flex flex-col lg:h-auto lg:max-h-[199px] lg:w-auto lg:max-w-[150px] lg:gap-[15px]">
            <button className="flex w-full justify-between">
                <p className="body-medium font-bold text-[#222325]">{label}</p>
                <div className="flex size-[24px] items-center justify-center lg:hidden">
                    <MdArrowForwardIos />
                </div>
            </button>
            <div className="body-medium hidden flex-col font-medium text-[#333333AD] lg:flex lg:h-auto lg:max-h-[162px] lg:w-auto lg:max-w-[150px] lg:gap-[13px] lg:text-nowrap">
                {children}
            </div>
        </div>
    )
}
