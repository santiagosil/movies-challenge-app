export function SelectGenreFormField() {
  return (
    <label className="space-y-4 text-white">
      <span className="text-xl font-bold">Genres</span>
      <select className="block w-full bg-neutral-850 px-4 py-3 ">
        <option value="">Choose a Genre</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </label>
  );
}
