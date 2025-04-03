const Button = ({
    label,
    backgroundColor,
    textColor,
    href,
}: {
    label: string
    backgroundColor: string
    textColor: string
    href?: string
}) => {
    return (
        <a
            href={href}
            className={`flex h-auto max-h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] ${backgroundColor} sm:max-h-[42px] sm:max-w-[518px]`}
        >
            <p
                className={`body-medium h-auto max-h-[34px] w-auto max-w-[90px] px-[22px] py-[7px] font-bold ${textColor} sm:max-h-[42px] sm:max-w-[104px] sm:px-[26px] sm:py-[10px]`}
            >
                {label}
            </p>
        </a>
    )
}

export default Button

export function IconsButton({
    label,
    imageSrc,
}: {
    label: string
    imageSrc: string
}) {
    {
        return (
            <button className="flex h-[34px] w-full max-w-[280px] items-center justify-center rounded-[10px] border-[1px] border-[#F1F1F1] sm:h-[42px] sm:max-w-[518px]">
                <div className="flex items-center gap-[8px] px-[26px] py-[8px] sm:h-auto sm:max-h-[38px] sm:w-auto sm:max-w-[249px]">
                    <div className="flex items-center gap-[8px] sm:h-auto sm:max-h-[22px] sm:w-auto sm:max-w-[197px]">
                        <img src={imageSrc} alt="google-logo" />
                        <p className="body-medium text-nowrap font-bold text-[#4A505C]">
                            {label}
                        </p>
                    </div>
                </div>
            </button>
        )
    }
}
