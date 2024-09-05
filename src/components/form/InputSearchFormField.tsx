import { Search } from "lucide-react";

export const InputSearchFormField = () => {
  return (
    <label className="text-white space-y-4 w-64">
      <span className="font-bold text-xl">Search</span>
      <div className="relative">
        <input
          id="default-search"
          className="bg-neutral-850 py-3 px-4 text-white placeholder:text-white/60 border-b border-b-neutral-500/60 focus:border-b-white outline-none"
          placeholder="Keywords"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white size-5" />
      </div>
    </label>
  );
};
