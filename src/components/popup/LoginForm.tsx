import { useEffect, useRef, useState } from "react";
import Input from "../utils/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../utils/Button";
import { IoMdClose } from "react-icons/io";
import { checkLogin, setUser } from "../../hooks/Login";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  loginDialog: boolean;
  handleOpenLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  loginDialog,
  handleOpenLogin,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [typePassword, setTypePassword] = useState(false);
  const loginRef = useRef(null);

  const { t } = useTranslation();

  const handleHidePassword = () => {
    setTypePassword((curr) => !curr);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    reset({
      defaultValues: {
        username: "",
        password: "",
      },
    });
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // if (JSON.parse().message === false) {
    //   alert("Username or Password Wrong!");
    //   return;
    // }
    setUser(checkLogin(data.username, data.password));
    handleOpenLogin();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleClick = (e: Event) => {
    if (e.target === loginRef.current) {
      handleOpenLogin();
    }
  };

  return (
    <div
      ref={loginRef}
      onClick={() => handleClick(event as Event)}
      className={`absolute z-30 bg-[#00000046] h-screen w-screen flex justify-center items-center ${
        loginDialog ? "block" : "hidden"
      }`}
    >
      <button
        className="absolute top-4 right-4 rounded-md"
        onClick={handleOpenLogin}
      >
        <IoMdClose size={28} />
      </button>
      <div className="relative w-[440px]">
        <div className="-translate-y-24 flex min-h-full flex-col justify-center px-8 py-12 items-center lg:px-8">
          <div className="relative mt-16 w-full sm:max-w-[440px] shadow-xl p-8 rounded-lg bg-white z-10 justify-center">
            <div
              className={`flex justify-center text-main pb-2 text-3xl uppercase font-bold`}
            >
              {t("Login")}
            </div>
            <form className="space-y-6 w-full" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <Input
                    id="username"
                    label={t("Username")}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <Input
                    id="password"
                    label={t("Password")}
                    showLockIcon={true}
                    type={typePassword ? "text" : "password"}
                    typePassword={typePassword}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    onclick={handleHidePassword}
                    required
                  />
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-sm mt-1">
                    <a
                      href="#"
                      className="font-semibold text-main hover:opacity-80"
                    >
                      {t("ForgotPass")}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  loading={isLoading}
                  label={t("Login")}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
