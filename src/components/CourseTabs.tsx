export function CourseTab({
    label,
    isActive,
}: {
    label: string
    isActive: boolean
}) {
    return (
        <div className="h-max-[50px] flex h-auto w-auto flex-col sm:max-h-[52px] sm:max-w-full">
            <div className="flex h-[44px] w-auto max-w-full flex-col justify-center sm:h-auto sm:max-h-[46px] sm:max-w-full sm:py-[12px]">
                <p
                    className={`body-medium w-fit text-nowrap font-medium ${
                        isActive ? "text-[#333333AD]" : "text-[#F64920]"
                    }`}
                >
                    {label}
                </p>
            </div>
            <div
                className={`h-[6px] w-[52px] rounded-[10px] ${
                    isActive ? "display-none" : "bg-[#F64920]"
                }`}
            ></div>
        </div>
    )
}
