export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 bg-stone-700 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2.5 h-2.5 bg-stone-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2.5 h-2.5 bg-stone-300 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
