/**
 * Implement useAsyncEffect.
 * - it should work exactly like useEffect, but with async callback
 * - provide assertActive function. If called - it will silently throw an error and stop
 * execution of the effect in case effect is no longer active.
 * - if effect finished, callback should be called even if component is unmounted before
 * effect finished.
 */

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

  return <div>SomeComponent {rendersCount}</div>;
}
