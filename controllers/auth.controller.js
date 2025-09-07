// controllers/auth.controller.js

export const createUser = (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Example: create user logic here (e.g., save to DB)
  return res.status(201).json({ message: "User created", user: { name, email } });
};

export const login = (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Example: login logic here (dummy response)
  return res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
};

export const getMyProfile = (req, res) => {
  // Example: return user profile (from auth middleware)
  return res.status(200).json({ message: "My profile", user: req.user || {} });
};
