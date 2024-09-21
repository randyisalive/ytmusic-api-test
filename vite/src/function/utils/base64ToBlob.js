import { Buffer } from "buffer";

export const base64ToBlob = (base64, mimeType) => {
  const binary = Buffer.from(base64, "base64");
  return new Blob([binary], { type: mimeType });
};
