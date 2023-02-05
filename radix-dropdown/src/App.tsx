import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function App() {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md border border-gray-300 bg-white">
        <header className="border-b border-gray-100 p-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="cursor-default select-none rounded px-4 text-2x; hover:bg-gray-200/50 focus-visible:outline-none data-[state=open]:bg-gray-200/75">
              ✲
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content align="start" className="mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur">

              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </header>
      </div>
    </div>
  );
}

export default App;
