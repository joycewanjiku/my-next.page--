export const loguser = async (email: string, phonenumber: string) => {
    try {
    const response = await fetch(`/api/login`, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({
    "email": email,
    "phonenumber": phonenumber
    })
    });
    const result = await response.json();
    return result;
    } catch (error) {
    console.error("Error logging in an loguser:", error);
    return [];
    }
    };

    // interface FormData {
    //     username: string;
    //     email_address: string;
    //     first_name: string;
    //     last_name: string;
    //     phonenumber: string; 
    //     location: string;
    //     password: string;
    //     confirmPassword: string;
    //   }
        export const registerUser = async (formData: FormData) => {
        // const url = '/api/register-users';
        const url = `https://c766-41-80-118-248.ngrok-free.app/api/registeration`
        console.log(formData, "form data")
        try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "username": "Pureeee",
            "first_name": "Wenty",
            "last_name": "Amos",
            "email": "amoss@gmail.com",
            "location": "Ruiru",
            "phonenumber": "0765431278",
            "password": "2002"
          }),
        });
        const result = await response.json();
        return result;
        } catch (error: any) {
            console.log(error, "/api/registeration");
        throw new Error(error.message);
        }
        };
        


