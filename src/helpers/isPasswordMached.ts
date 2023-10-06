export const isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  // Convert the given password string to a Buffer
  // const givenPasswordBuffer = Buffer.from(givenPassword);

  // Use the bcrypt.compare function to compare the buffers
  // return await bcrypt.compare(givenPasswordBuffer, savedPassword);
  return givenPassword === savedPassword;
};
