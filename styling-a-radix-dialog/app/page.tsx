"use client";

import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import users from "./users.json";
import * as Dialog from "@radix-ui/react-dialog";

export default function Page() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
            key={user.id}
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              
              <Dialog.Root>
                <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
                  <Pencil1Icon />
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50"/>
                  <Dialog.DialogContent className="fixed top-1/4 left-1/2 bg-white text-gray-900 rounded-md p-8 shadow -translate-x-1/2 -translate-y-0 w-full max-w-md">
                    <div className="flex justify-between items-center">
                      <Dialog.Title className="text-xl">
                        Edit Contact
                      </Dialog.Title>
                      <Dialog.Close className="text-gray-400 hover:text-gray-600">
                        <Cross1Icon />
                      </Dialog.Close>
                    </div>
                    <div className="mt-8">
                      <UserFields user={user}/>
                    </div>
                    <div className="text-right mt-4 space-x-2">
                      <Dialog.Close className="px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-600">
                        Cancel
                      </Dialog.Close>
                      <button className="bg-green-500 px-4 py-2 rounded-md text-sm text-white font-medium hover:bg-green-600">
                        Save
                      </button>
                    </div>
                  </Dialog.DialogContent>
                </Dialog.Portal>
                
              </Dialog.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserFields({
  user,
}: {
  user: { id: string; name: string; email: string; role: string };
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.name}
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.role}
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.email}
        />
      </div>
    </div>
  );
}
