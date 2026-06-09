import { z } from "zod";

type ZodFormSchema<T> = z.ZodObject<any, any, any, T>;
interface Props<T> {
  schema: ZodFormSchema<T>;
  onSubmit: (data: T) => Promise<unknown>;
}

export function ZodForm<T>({ schema, onSubmit }: Props<T>) {
  return null;
}
