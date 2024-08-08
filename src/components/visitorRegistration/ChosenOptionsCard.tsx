type choseOptionsCard = {
  title?: string;
  description: string;
  active: boolean;
};

export default function ChosenOptionsCard({
  title,
  description,
  active,
}: choseOptionsCard) {
  return (
    <div
      className={`flex flex-col justify-center items-center border border-stone-300 shadow-lg py-2 px-2 rounded-md peer-checked:bg-stone-400 peer-checked:text-white  min-[380px]:py-1 ${
        !active ? 'bg-stone-100 pointer-events-none' : ''
      }`}
    >
      <span
        className={`font-bold text-xs min-[380px]:text-sm  min-[380px]:mb-1.5 ${
          !active ? 'text-stone-300 pointer-events-none line-through' : ''
        }`}
      >
        {title ? title : null}
      </span>
      <span
        className={`text-xs min-[380px]:text-sm ${
          !active ? 'text-stone-300 pointer-events-none line-through' : ''
        }`}
      >
        {description}
      </span>
      <span
        className={`text-xs min-[380px]:text-sm ${
          !active ? 'text-stone-500 pointer-events-none' : ''
        }`}
      >
        {!active ? 'Esgotado!' : ''}
      </span>
    </div>
  );
}
