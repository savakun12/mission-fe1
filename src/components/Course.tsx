import { useState } from "react"
import { CourseTab } from "./CourseTabs"
import { CourseCard } from "./CourseCard"

const Course = () => {
    const [isActive] = useState(0)
    const cards = Array.from({ length: 9 }, (_, index) => index + 1)
    return (
        <section className="flex max-w-[320px] flex-col gap-[24px] sm:h-auto sm:w-full sm:max-w-[1200px] sm:gap-[32px]">
            <div className="flex max-h-[102px] w-full max-w-[320px] flex-col gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[632px]">
                <h3 className="heading-3 font-semibold">
                    Koleksi Video Pembelajaran Unggulan
                </h3>
                <p className="body-medium font-medium text-[#333333AD]">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                </p>
            </div>
            <div className="flex max-h-[50px] w-fit max-w-[320px] flex-row gap-[36px] overflow-x-auto sm:h-auto sm:max-h-[52px] sm:w-auto sm:max-w-[612px]">
                <CourseTab label="Semua Kelas" isActive={isActive === 1} />
                <CourseTab label="Pemasaran" isActive={isActive === 0} />
                <CourseTab label="Desain" isActive={isActive === 0} />
                <CourseTab
                    label="Pengembangan Diri"
                    isActive={isActive === 0}
                />
                <CourseTab label="Bisnis" isActive={isActive === 0} />
            </div>
            <div className="grid gap-[20px] sm:grid-cols-2 sm:grid-rows-3 sm:gap-[24px] lg:grid-cols-3">
                {cards.map((index) => (
                    <CourseCard
                        key={index}
                        image={`image-${index}.jpeg`}
                        avatar={`avatar-${index}.png`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Course
