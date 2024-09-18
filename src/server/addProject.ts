interface PostData {
  fullname: string;
  phone_number: string;
  description: string;
}
interface Response {
  success: boolean;
}
const sendPostRequest = async ( data: PostData): Promise<Response> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 

  const raw = JSON.stringify(data);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch('https://innox.server.sirdaryotexnopark.uz', requestOptions);
   
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendPostRequest;