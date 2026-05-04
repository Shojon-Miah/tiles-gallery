export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-2 gap-1.5">
          <span className="w-4 h-4 bg-stone-700 rounded-sm animate-pulse" />
          <span className="w-4 h-4 bg-stone-400 rounded-sm animate-pulse delay-75" />
          <span className="w-4 h-4 bg-stone-400 rounded-sm animate-pulse delay-150" />
          <span className="w-4 h-4 bg-stone-700 rounded-sm animate-pulse delay-200" />
        </div>
        <p className="text-xs uppercase tracking-widest text-stone-400">Loading...</p>
      </div>
    </div>
  );
}

