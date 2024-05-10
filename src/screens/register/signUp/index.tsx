import { Button, Textfield } from "@/components";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";
import "./index.css";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import * as yup from "yup";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/Visibilityoff";
import { useForm } from "react-hook-form";

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
  username: string;
  phone: string;
}

const RegisterSchema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "password must be atleast 6 characters"),
  phone: yup.string().required().matches(/^\d{10}$/,'phone must be valid'),
  username: yup.string().required().matches(/^\w{6,30}$/gm, "minimum characters is 6"),
});

export function SignUp() {
  const [passwordType, setPasswordType] = React.useState<"password" | "text">(
    "password"
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    resolver: yupResolver(RegisterSchema),
  });

  function handleRegisterUser(data: IRegisterData) {
    console.log(data);
    const input3 = document.getElementById("3") as HTMLInputElement;
    input3.value = "";
    const input4 = document.getElementById("4") as HTMLInputElement;
    input4.value = "";
    const input5 = document.getElementById("5") as HTMLInputElement;
    input5.value = "";
    const input6 = document.getElementById("6") as HTMLInputElement;
    input6.value = "";
  }
  return (
    <>
      <p className="text-gray-500 mt-4">welcom to FR fashion house</p>
      <h1 className="font-bold text-3xl mb-8">SIGN UP</h1>

      <Box
        sx={styles}
        component="form"
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <TextField
          id="3"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          label="Enter your email address"
          InputProps={{
            ...register("email"),
          }}
        />
        <div className="flex gap-3 w-full justify-between  new-info">
          <TextField
            className="w-full username"
            id="4"
            error={Boolean(errors.username?.message)}
            helperText={errors.username?.message}
            label="Enter your username"
            InputProps={{
              ...register("username"),
            }}
          />
          <TextField
            id="5"
            className="w-full"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
            label="Enter your number"
            InputProps={{
              ...register("phone"),
            }}
          />
        </div>
        <TextField
          id="6"
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
        <div className="buttons flex justify-end gap-5 mt-3">
          <Link to={ROUTES.signin}>
            <Button className="sign-in-btn-2">Sign In</Button>
          </Link>
          <Button
            type="submit"
            className="!bg-blue-500 create-account-2 text-white hover:text-blue-300"
          >
            Create An Account
          </Button>
        </div>
      </Box>
    </>
  );
}
