import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
export const authRequired = (req, res, next) => {
  // console.log(req.headers.cookie); // Muestra la cadena de cookies sin procesar

  const cookies = req.headers.cookie;
  const tokenCookie =
    cookies &&
    cookies.split(";").find((cookie) => cookie.trim().startsWith("token="));

  if (tokenCookie) {
    const token = tokenCookie.split("=")[1];
    console.log(token);
    if (!token)
      return res.status(401).json({ message: "no token,autorization denied" });
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) return res.status(401).json({ message: "invalid token" });
      req.user = user;
      next();
    });
  }
};
