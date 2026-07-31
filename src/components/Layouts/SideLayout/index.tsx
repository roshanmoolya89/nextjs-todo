import { Icon } from "@iconify/react";

const SideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full relative">
      <div className="w-64 lg:w-80 fixed top-0 left-0 h-dvh bg-black px-2 py-6">
        <header className="w-full flex justify-between px-2">
          <div className="w-1/2 flex items-center gap-2">
            <p className="font-extrabold text-2xl">Todos</p>
          </div>
          <div className="w-3/4 flex justify-end gap-1.5">
            <button className="bg-secondary-300 hover:bg-secondary-500 text-white font-bold py-2 px-2.5 rounded-lg">
              <Icon
                icon="qlementine-icons:plus-16"
                className="text-white w-4 h-4"
              />
            </button>
            <button className="bg-secondary-300 hover:bg-secondary-500 text-white font-bold p-2 rounded-lg">
              <Icon
                icon="entypo:dots-two-horizontal"
                className="text-white w-5 h-5"
              />
            </button>
          </div>
        </header>
        <div className="w-full">
          <div className="w-full flex items-center justify-between gap-2 p-3 mt-10 bg-secondary-500 rounded-lg">
            <h5 className="text-accent font-extrabold">This week</h5>
            <Icon
              icon="boxicons:minus-filled"
              className="text-white w-3.5 h-3.5"
            />
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-16rem)] lg:w-[calc(100%-20rem)] h-dvh bg-white ml-auto">
        {children}
      </div>
    </div>
  );
};

export default SideLayout;
