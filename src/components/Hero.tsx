const Hero = () => {
    return (
        <section
            style={{ backgroundImage: "url(bg-hero.jpeg)" }}
            className="relative flex w-full max-w-[320px] flex-col gap-[24px] rounded-[10px] bg-cover bg-center px-[20px] py-[37px] before:absolute before:inset-0 before:z-0 before:rounded-[10px] before:bg-black before:bg-opacity-80 sm:h-[400px] sm:max-h-full sm:max-w-[1200px] sm:gap-[24px] sm:rounded-[10px] sm:px-[140px] sm:pb-[50.5px] sm:pt-[68.5px]"
        >
            <div className="z-10 flex h-auto max-h-[262px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[215px] sm:max-w-[920px]">
                <h1 className="heading-1 flex h-auto w-full flex-col justify-start text-center text-white sm:max-h-[159px] sm:max-w-[920px]">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform
                    Video Interaktif!
                </h1>
                <p className="body-medium text-center font-medium text-white">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                    video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                    juga dapat berpartisipasi dalam latihan interaktif yang akan
                    meningkatkan pemahaman Anda.
                </p>
            </div>
            <button className="body-medium z-10 mx-auto max-h-[40px] w-full max-w-[280px] text-nowrap rounded-[10px] bg-[#3ECF4C] px-[0px] py-[10px] text-center font-normal text-white sm:h-auto sm:max-h-[42px] sm:w-auto sm:max-w-[369px] sm:px-[26px] sm:py-[10px] sm:font-bold">
                Temukan Video Course untuk Dipelajari!
            </button>
        </section>
    )
}

export default Hero
