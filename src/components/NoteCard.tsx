export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-600">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>

      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nulla
        consequatur provident quo eum ea aliquid debitis animi dolorum omnis
        ullam soluta facere laborum officiis, alias consequuntur quam a. Magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        corporis ipsum cumque autem, at atque quasi praesentium ab eum omnis
        distinctio neque perferendis quod, nesciunt dolor! Dolor id numquam
        dolorem.
      </p>

      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
