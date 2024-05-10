import { Button } from "@/components";
import "./index.css";
import { GoogleIconSvg } from "@/assets/svgs";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/Visibilityoff";
import { instance } from "@/api/constants";
import { toast } from "react-hot-toast";

const styles = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  mt: 2,
  mb: 5,
};

interface IRegisterData {
  email: string;
  password: string;
}

const RegisterSchema : yup.ObjectSchema<{ email: string; password: string; }> = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "password must be atleast 6 characters"),
});

export function SignIn() {

  const navigate = useNavigate()

  const [passwordType, setPasswordType] = React.useState<"password" | "text">(
    "password"
  );

  // const [loading,setLoading] = React.useState<boolean>(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  const handleRegisterUser = React.useCallback((data: IRegisterData) => {
    console.log(data);
    const input1 = document.getElementById("1") as HTMLInputElement;
    input1.value = "";
    const input2 = document.getElementById("2") as HTMLInputElement;
    input2.value = "";
    // setLoading(true)
    instance.post("/api/register", data).then((res) => {
      console.log(res);
      toast.success('you registered successfully')
      // setLoading(false)
      navigate('/')
    }).catch(
      ()=>{
      toast.error('something went wrong')
        // setLoading(false)
      }
    )
  }, []);

  return (
    <>
      <p className="text-gray-500">welcom to FR fashion house</p>
      <h1 className="font-bold text-3xl mb-12">SIGN IN</h1>

      <Box
        sx={styles}
        component="form"
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <TextField
          id="1"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          label="Enter your username or email address"
          InputProps={{
            ...register("email"),
          }}
        />
        <TextField
          id="2"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          label="Enter your Password"
          type={passwordType}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setPasswordType((prev) => {
                      if (prev === "password") return "text";
                      return "password";
                    });
                  }}
                >
                  {passwordType === "text" ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            ...register("password"),
          }}
        />

        <div className="buttons flex justify-end gap-5 mb-8">
          <Link to={ROUTES.signup}>
            <Button className="dont-hv-account">Don't have an Account</Button>
          </Link>

          <Button className="!bg-blue-500 sign-in-btn-1 text-white hover:text-blue-300">
            Sign In
          </Button>
        </div>
      </Box>

      <div className="google-sign flex gap-1 justify-start text-sm items-center">
        <GoogleIconSvg className="w-5 h-5" />
        <h1 className="text-gray-500 hover:text-gray-700 cursor-pointer">
          Or Continue With Google
        </h1>
      </div>
    </>
  );
}
