import Button, { IconsButton } from "./Button"
import { InputForm, PasswordForm } from "./Forms"

const LoginForm = () => {
    return (
        <div className="flex h-auto max-h-[514px] w-full max-w-[320px] flex-col gap-[20px] border border-[#F1F1F1] bg-[#FFFFFF] p-[20px] sm:max-h-[617px] sm:min-w-[590px] sm:gap-[36px] sm:rounded-[4px] sm:p-[36px]">
            <div className="flex h-auto max-h-[56px] w-full max-w-[280px] flex-col items-center justify-center gap-[10px] sm:max-h-[67px] sm:max-w-[525px]">
                <h1 className="heading-3 font-semibold">Masuk Ke Akun</h1>
                <p className="body-medium font-normal text-[#333333AD]">
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </div>
            <div className="flex h-auto max-h-[304px] w-full max-w-[280px] flex-col gap-[24px] sm:max-h-[330px] sm:w-auto sm:max-w-[518px]">
                <div className="flex h-auto max-h-[196px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[206px] sm:max-w-[518px] sm:gap-[16px]">
                    <InputForm label="E-Mail" />
                    <PasswordForm label="Kata Sandi" />
                    <a
                        href=""
                        className="body-medium flex w-full justify-end font-medium text-[#4A505C]"
                    >
                        Lupa Password?
                    </a>
                </div>
                <div className="flex h-auto max-h-[84px] w-full max-w-[280px] flex-col gap-[16px] sm:max-h-[100px] sm:w-auto sm:max-w-[518px]">
                    <Button
                        label="Daftar"
                        href="/register"
                        backgroundColor="bg-[#3ECF4C]"
                        textColor="text-[#FFFFFF]"
                    />
                    <Button
                        label="Masuk"
                        href="/dashboard"
                        backgroundColor="bg-[#E2FCD9CC]"
                        textColor="text-[#3ECF4C]"
                    />
                </div>
            </div>

            <div className="relative my-[0px] h-auto max-h-[20px] w-full max-w-[280px] gap-[10px] sm:my-0 sm:max-h-[22px] sm:max-w-[518px]">
                <hr className="border-[#F1F1F1]" />
                <span className="body-medium absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-[8px] font-normal text-[#4A505C]">
                    atau
                </span>
            </div>
            <IconsButton
                label="Daftar Dengan Google"
                imageSrc="logos_google-icon.svg"
            />
        </div>
    )
}

export default LoginForm
