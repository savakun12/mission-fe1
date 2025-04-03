import Button, { IconsButton } from "./Button"
import { InputForm, PasswordForm, PhoneNumberForm } from "./Forms"

const RegisterForm = () => {
    return (
        <div className="flex h-auto max-h-[866px] w-full max-w-[320px] flex-col gap-[20px] rounded-[4px] border-[1px] border-[#F1F1F1] bg-[#FFFFFF] p-[20px] sm:max-h-[893px] sm:max-w-[590px] sm:gap-[36px] sm:p-[36px]">
            <div className="flex flex-col items-center gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[525px]">
                <h3 className="heading-3 font-semibold">Pendaftaran Akun</h3>
                <p className="body-medium font-normal text-[#333333AD]">
                    Yuk, daftarkan akunmu sekarang juga!
                </p>
            </div>
            <div className="flex h-auto max-h-[750px] w-full max-w-[280px] flex-col gap-[20px] sm:max-h-[718px] sm:w-auto sm:max-w-[518px] sm:gap-[24px]">
                <div className="flex h-auto max-h-[656px] w-full max-w-[280px] flex-col gap-[24px] sm:max-h-[606px] sm:w-auto sm:max-w-[518px]">
                    <div className="flex h-auto max-h-[548px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[482px] sm:max-w-[518px] sm:gap-[16px]">
                        <InputForm label="Nama Lengkap" />
                        <InputForm label="E-Mail" />
                        <PhoneNumberForm label="No. Hp" />
                        <PasswordForm label="Kata Sandi" />
                        <PasswordForm label="Konfirmasi Kata Sandi" />
                        <a
                            href=""
                            className="body-medium flex w-full justify-end font-medium text-[#333333AD]"
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
                            href="/"
                            backgroundColor="bg-[#E2FCD9CC]"
                            textColor="text-[#3ECF4C]"
                        />
                    </div>
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

export default RegisterForm
