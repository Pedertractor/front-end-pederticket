type choseOptionsCard = {
  title: string;
  description: string;
};

export default function ChosenOptionsCard({
  title,
  description,
}: choseOptionsCard) {
  return (
    <div className='flex flex-col border py-2 px-2 rounded-md peer-checked:bg-stone-400 peer-checked:text-white  min-[380px]:py-1.5'>
      <span className='font-bold text-xs min-[380px]:text-sm  min-[380px]:mb-1.5'>
        {title}
      </span>
      <span className='text-xs min-[380px]:text-sm'>{description}</span>
    </div>
  );
}
