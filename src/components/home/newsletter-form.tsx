"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Spinner } from "../ui/spinner";

const formSchema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof formSchema>;

export function NewsletterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    formState: { isSubmitting, isLoading },
    control,
    handleSubmit,
  } = form;

  async function onSubmit(values: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  const isFormDisabled = isLoading || isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-8"
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isFormDisabled}
                  className="border-none"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          rounded="full"
          className="w-full"
          disabled={isFormDisabled}
        >
          {isSubmitting ? <Spinner /> : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}
