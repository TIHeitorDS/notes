import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-600 p-5 flex flex-col text-left gap-3 hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-600">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/80" />

        <Dialog.Content className="fixed bg-slate-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-full max-h-[600px] rounded-md flex flex-col outline-none overflow-hidden">
          <Dialog.Close className="bg-slate-800 absolute right-0 top-0 p-1.5 text-slate-500 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              Adicionar nota
            </span>

            <p className="text-slate-400 text-sm leading-6">
              Comece{" "}
              <button className="text-lime-400 hover:underline">
                gravando uma nota
              </button>{" "}
              em áudio ou se preferir{" "}
              <button className="text-lime-400 hover:underline">
                utilize apenas texto
              </button>
              .
            </p>
          </div>
          <button
            type="button"
            className="bg-lime-400 text-[#1A2E05] py-4 text-center text-sm outline-none group font-semibold hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
