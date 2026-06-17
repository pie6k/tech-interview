import { useRerenderInterval, wait } from "./utils";

export function SomeComponent() {
  const renderCount = useRerenderInterval(100, 1000);

  useAsyncEffect(
    async ({ assertActive }) => {
      await wait(500);

      assertActive();

      console.log("Async effect finished");
    },
    [renderCount]
  );

  return <div>SomeComponent</div>;
}
