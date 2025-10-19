"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { submitForm } from "@/app/actions/actions";

const initialState = { message: "", status: 0, redirectId: "" };

export default function Page() {
  const params = useParams();
  const router = useRouter();

  const [state, formAction] = React.useActionState(submitForm, initialState);

  // Redirect after successful form submission
  useEffect(() => {
    if (state?.status === 200) {
      // Use redirectId returned by server action
      router.push(`/users/${state.redirectId}`);
    }
  }, [state, router]);

  return (
    <div className="m-4 flex gap-4 flex-col max-w-sm">
      <h1>URL param ID: {params.id}</h1>

      <form action={formAction} className="flex flex-col gap-2">
        <input name="id" placeholder="Enter the id" className="border p-2" />
        <button type="submit" className="bg-blue-400 text-white p-3 rounded-md">
          Submit
        </button>
      </form>

      {state?.message && (
        <div className="mt-4 p-2 bg-green-100 rounded">{state.message}</div>
      )}
    </div>
  );
}
