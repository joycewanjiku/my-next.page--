export const loguser = async (username: string, password: string) => {
    try {
    const response = await fetch(`/api/login-users`, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({
    "username": username,
    "password": password
    })
    });
    const result = await response.json();
    return result;
    } catch (error) {
    console.error("Error logging in an loguser:", error);
    return [];
    }
    };

    interface FormData {
        username: string;
        email: string;
        first_name:string;
        last_name:string;
        phonenumber:string;
        location:string;
       
        }
        export const registerUser = async (formData: FormData) => {
        const url = '/api/register-users';
        try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });
        const result = await response.json();
        return result;
        } catch (error: any) {
        throw new Error(error.message);
        }
        };
        


