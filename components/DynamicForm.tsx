"use client";

type SelectOption = {
  label: string;
  value: string;
};

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[];
};

type DynamicFormProps = {
  formFields: FormField[];
};

const DEFAULT_FIELDS: FormField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "emailAddress",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
];

const inputClassName = "w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-600";

function renderField(field: FormField) {
  return (
    <div key={field.name} className="grid gap-2">
      <label htmlFor={field.name} className="text-sm text-gray-900">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={4}
          className={inputClassName}
        />
      ) : field.type === "select" ? (
        <select id={field.name} name={field.name} required={field.required} className={inputClassName}>
          <option value="">Select an option</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={field.name}
          name={field.name}
          type={field.type ?? "text"}
          placeholder={field.placeholder}
          required={field.required}
          className={inputClassName}
        />
      )}
    </div>
  );
}

export default function DynamicForm({ formFields }: DynamicFormProps) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-md border border-gray-200 bg-white p-6">
        <h2 className="text-xl text-gray-900">Contact Form</h2>
        <p className="mt-2 text-gray-600">Share your details and we will get back to you.</p>

        <form className="mt-6 grid gap-6">
          {DEFAULT_FIELDS.map((field) => renderField(field))}

          {formFields.length > 0 ? (
            <div className="grid gap-6 rounded-md border border-gray-200 bg-gray-50 p-6">
              {formFields.map((field) => renderField(field))}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
