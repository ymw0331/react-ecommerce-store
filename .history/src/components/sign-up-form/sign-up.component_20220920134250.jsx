const signUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form>
        <label>Display Name:</label>
        <input required />
        <label>Email:</label>
        <input required />
        <label>Passwrod:</label>
        <input required />
        <label>Confirm Password:</label>
        <input required />
      </form>
    </div>
  );
};
