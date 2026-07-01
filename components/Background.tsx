export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[#05070C]" />

      <div className="absolute top-64 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[150px]" />
    </>
  );
}
