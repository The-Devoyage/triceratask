import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";

export const Edit = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Card>
      <h4 className="text-xl font-bold">Manage your todo</h4>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="my-2">
          <Label>Name</Label>
          <TextInput placeholder="Name" {...register("name")} />
          <Label>Todo</Label>
          <Textarea placeholder="Todo" {...register("todo")} />
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  );
};
