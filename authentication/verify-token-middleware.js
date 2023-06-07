import { verifyToken } from "./authentication.js";

export const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const response = await verifyToken(token);

    if (response.error) {
      throw res.status(403).send(response);
    } else {
      res.locals.userId = response.users[0].localId;
      next();
    }
  } catch {
    res.status(401).send("Unauthorized, token verification failed");
  }
};
