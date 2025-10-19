"use server";

export async function submitForm(prevState: any, formData: FormData) {
  const inputId = formData.get("id") as string;

  // Return message, status, and optionally redirect ID
  return {
    ...prevState,
    message: `Form submitted with input ID: ${inputId}`,
    status: 200,
    redirectId: inputId, // optional, if you want to redirect based on input
  };
}
