export const handleFirebaseError = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      alert("This email is already registered.");
      break;

    case "auth/invalid-email":
      alert("Invalid email address.");
      break;

    case "auth/weak-password":
      alert("Password should be at least 6 characters.");
      break;

    case "auth/user-not-found":
      alert("User does not exist.");
      break;

    case "auth/wrong-password":
      alert("Incorrect password.");
      break;
    
    case "auth/invalid-credential":
      alert("Incorrect password.");
        break;

    default:
      alert("Something went wrong. Please try again.");
  }
};