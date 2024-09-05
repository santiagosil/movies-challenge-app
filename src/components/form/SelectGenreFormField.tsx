export const SelectGenreFormField = () => {
  return (
    <label className="text-white space-y-4">
      <span className="font-bold text-xl">Genres</span>
      <select className="bg-neutral-850 py-3 px-4 w-full block ">
        <option value="">Choose a Genre</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </label>
  );
};
