/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
import { getBase64 } from "lib-bee";

export function convertToBase64(str: string): string {
  return getBase64(str);
}

export function convertToHex(str: string): string {
  const bufferConversionResult = Buffer.from(str, "ascii");
  console.log("lib-aaa printing hex for buffer - '" + str + "', 'ascii'");
  const res: string = bufferConversionResult.toString("hex");
  console.log(res);
  return res;
  // should print for 'hello world': 68656c6c6f20776f726c64
}
