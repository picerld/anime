const Loading = () => {
  return (
    <div className="flex flex-row items-center justify-center max-w-xl min-h-screen gap-4 mx-auto">
      <span className="loading loading-lg loading-spinner text-primary"></span>
      <h1 className="text-3xl font-bold text-white">LOADING</h1>
    </div>
  );
};

export default Loading;