import { useState } from 'react';
import { loguser } from '../utilities/utils';
import { useRouter } from 'next/router';

interface LoginData {
  email: string;
  phonenumber: string;
}

const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState<{ token: string }>({ token: '' });

  const handleSignin = async () => {
    const response = await loguser(initialLoginData.email, initialLoginData.phonenumber);

    setUser(response);

    if (response.token) {
      router.push('/document');
    } else {
      router.push('/document');
    }
  };

  return { user, handleSignin };
};

export default useLogin;