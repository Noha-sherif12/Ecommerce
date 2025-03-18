import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@validations/signInSchema";
import { useNavigate, useSearchParams } from "react-router-dom";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const submitForm: SubmitHandler<signInType> = (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);
  return {
    error,
    loading,
    accessToken,
    register,
    handleSubmit,
    formErrors,
    submitForm,
    searchParams,
  };
};

export default useLogin;
