import { useRandomReRender, wait } from "./utils";

export function SomeComponent() {
  const rendersCount = useRandomReRender(100, 1000);

  useAsyncEffect(
    async ({ assertActive }) => {
      await wait(500);

      assertActive();

      console.log("Async effect finished", { rendersCount });

      return () => {
        console.log("Async effect cleanup", { rendersCount });
      };
    },
    [rendersCount]
  );

  return <div>SomeComponent</div>;
}
