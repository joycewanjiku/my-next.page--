import { useState } from "react";
import { registerUser } from "../utilities/utils";
import { useRouter } from "next/navigation";
interface FormData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  location: string;
  password: string;
  confirmPassword: string;

}
const useCreateUsers = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleRegister = async (formData: FormData) => {
    try {
      const createdUser = await registerUser(formData);
      if (createdUser && createdUser.location) {
        setUser(createdUser);
        setError(createdUser.location);
        setMessage("");
      } else if (createdUser) {
        setUser(createdUser);
        setError("");
        setMessage("Registration successful.");
        router.push("/login");
      } else {
        setError("Registration failed. Please try again.");
        setMessage("");
      }n 
    } catch (error) {
      setUser(null);
      setError("Registration failed. Please try again.");
      setMessage("");
    }
  };
  return { handleRegister, user, error, message };
};
export default useCreateUsers;