import CardComponent from '@/components/home/card';

const Home = () => {
  return (
    <main className=' w-full h-screen bg-white flex flex-col items-center justify-center'>
      <h1 className=' font-medium mb-1 w-[45%]'>Pessoas inscritas</h1>
      <section className=' bg-zinc-100 rounded p-8 flex flex-col justify-center  items-center gap-5'>
        <div className=' flex flex-col gap-1'>
          <h2>02/12/2024</h2>
          <div className=' flex items-center gap-5'>
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
        <div className=' flex flex-col gap-1'>
          <h2>03/12/2024</h2>
          <div className=' flex items-center, gap-5'>
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
