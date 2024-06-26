import { BadRequestException } from "@nestjs/common";
import { maxLength, minLength, isEmail } from "class-validator";
import { USERNAME_MAX_SIZE, USERNAME_MIN_SIZE } from "common/utils/constants";

export function validateName(name: string) {
  if (typeof name !== "string") {
    throw new BadRequestException(`Bad name format: ${name || "<unknown>"}`);
  } else if (!maxLength(name, USERNAME_MAX_SIZE)) {
    throw new BadRequestException(`Max ${USERNAME_MAX_SIZE} characters`);
  } else if (!minLength(name, USERNAME_MIN_SIZE)) {
    throw new BadRequestException(`Min ${USERNAME_MIN_SIZE} characters`);
  }
}

export function validateEmail(email: string) {
  if (typeof email !== "string") {
    throw new BadRequestException(`Bad email format: ${email || "<unknown>"}`);
  } else if (!isEmail(email)) {
    throw new BadRequestException("Incorrect email format");
  }
}
