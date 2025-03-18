import { z } from "zod"

const signUpSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z.string().min(8, { message: "Password must be at least 8 charcters long" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password must contain at least one special character"
    }),
    confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
  }).refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match ",
    path: ["confirmPassword"]
  })
  
  type signUpType = z.infer<typeof signUpSchema>


  export { signUpSchema, type signUpType}