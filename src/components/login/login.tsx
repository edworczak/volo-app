import StyledInput from "../common/input/input";

export default function Login() {
    return (
      <form className="flex flex-col gap-4">
        <StyledInput label="adres email" type="email"/>
                <StyledInput label="hasło" type="password"/>
        <button type="submit">zaloguj</button>
      </form>
    );
  }
  