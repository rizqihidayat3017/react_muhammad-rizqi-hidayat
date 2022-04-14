import { render, fireEvent } from "@testing-library/react";
import NameForm from "./components/FormCoding";

function attributeInput(name) {
  const testing = render(<NameForm />);
  const inputan = testing.container.querySelector(`input[name="${name}"]`);
  return inputan;
}

describe("testing form Coding", () => {
  test("input name", () => {
    const value = "rizqihidayat";
    const inputan = attributeInput("nama");

    expect(inputan).toBeInTheDocument();
    fireEvent.change(inputan, { target: { value } });
    expect(inputan.value).toBe(value);
  });

  test("input email", () => {
    const value = "rizqi3229@gmail.com";
    const inputan = attributeInput("email");

    expect(inputan).toBeInTheDocument();
    fireEvent.change(inputan, { target: { value } });
    expect(inputan.value).toBe(value);
  });

  test("input noHandphone", () => {
    const value = "089345678938";
    const inputan = attributeInput("noHandphone");

    expect(inputan).toBeInTheDocument();
    fireEvent.change(inputan, { target: { value } });
    expect(inputan.value).toBe(value);
  });
});
