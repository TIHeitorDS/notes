import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

// tipando um objeto sepadarademente com o interaface
interface NoteCardProps {
  note: {
    date: Date;
    content: String;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-800 flex flex-col p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-600">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>

        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/80" />
        <Dialog.Content className="fixed bg-slate-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-full max-h-[600px] rounded-md flex flex-col outline-none overflow-hidden">
          <Dialog.Close className="bg-slate-800 absolute right-0 top-0 p-1.5 text-slate-500 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-col flex-1 gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>

            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            className="bg-slate-800 text-white py-4 text-center text-sm outline-none group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota?
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
