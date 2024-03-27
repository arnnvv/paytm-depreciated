import * as v from "valibot";

const signUpIn = v.object({
  name: v.optional(v.string()),
  email: v.optional(v.string([v.email()])),
  number: v.string([v.length(10)]),
  password: v.string([v.minLength(10)]),
});
export type SignUpIn = v.Output<typeof signUpIn>;

export const validate = (data: SignUpIn) => {
  const result = v.safeParse(signUpIn, data);
  return result.success;
};
