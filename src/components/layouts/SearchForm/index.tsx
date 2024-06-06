"use client";

import { searchSchema } from "@/constants/types-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchForm = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof searchSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoComplete="off"
                  type="text"
                  placeholder="Cari blog dan artikel disini ..."
                  className="h-9 w-60"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button size={"sm"} type="submit">
          <Search />
        </Button>
      </form>
    </Form>
  );
};
export default SearchForm;
