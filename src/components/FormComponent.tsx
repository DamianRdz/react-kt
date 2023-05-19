import React, { useEffect, useState } from "react";

type Props = {};

const INITIAL_ERRORS = { name: null, email: null };

function FormComponent({}: Props) {
  const [formState, setFormState] = useState<{
    name: {
      value: string;
      error: null | string;
    };
    email: {
      value: string;
      error: null | string;
    };
  }>({
    name: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormState({
      name: { ...formState.name, error: null },
      email: { ...formState.email, error: null },
    });
    console.log("Submit: ", formState.name.value, formState.email.value);
    if (formState.name.value.length < 1) {
      setFormState({
        ...formState,
        name: {
          ...formState.name,
          error: "Field name must be at least 2 characters",
        },
      });
    }
    if (formState.email.value.length < 6) {
      setFormState({
        ...formState,
        email: {
          ...formState.email,
          error: "Email field must be at least 7 characters",
        },
      });
    }
  };
  return (
    <div>
      <h3>Form</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="inputName">Name:</label>
        <input
          type="text"
          name="inputName"
          value={formState.name.value}
          onChange={(e) =>
            setFormState({
              ...formState,
              name: { ...formState.name, value: e.target.value },
            })
          }
        />
        {formState.name.error && <span>{formState.name.error}</span>}
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formState.email.value}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: { ...formState.email, value: e.target.value },
            })
          }
        />
        {formState.email.error && <span>{formState.email.error}</span>}
        <button style={{ marginTop: "1rem" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
