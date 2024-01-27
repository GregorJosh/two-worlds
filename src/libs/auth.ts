import { cookies } from "next/headers";
import jwt, { Secret } from "jsonwebtoken";

export const authenticate = async (data: object) => {
  const authTokens = await createTokens(data);

  setAuthCookies(authTokens);
};

export const createTokens = async (
  data: string | object | Buffer,
  accessTokenExpIn = "20m",
  refreshTokenExpIn = "1d"
) => {
  const accessSecretKey = process.env.JWT_SECRET_KEY as Secret;
  const refreshSecretKey = process.env.JWT_REFRESH_KEY as Secret;

  const accessToken = jwt.sign(data, accessSecretKey, {
    expiresIn: accessTokenExpIn,
  });

  const refreshToken = jwt.sign(data, refreshSecretKey, {
    expiresIn: refreshTokenExpIn,
  });

  return { accessToken, refreshToken };
};

export const setAuthCookies = (authTokens: AuthTokens) => {
  cookies().set("accessToken", authTokens.accessToken);
  cookies().set("refreshToken", authTokens.refreshToken, {
    httpOnly: true,
    secure: true,
  });
};

export const isAuth = () => {
  try {
    const accessToken = cookies().get("accessToken")?.value ?? "";
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY!);

    return decodedToken.sub as string;
  } catch {
    return false;
  }
};
