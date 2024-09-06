import type {Genre} from "@/Schemas/response/Genre";

interface SelectGenreFormFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: Genre[];
}

export function SelectGenreFormField({list, ...props}: SelectGenreFormFieldProps) {
  return (
    <label className="space-y-4 text-white">
      <span className="text-xl font-bold">Genres</span>
      <select className="block w-full bg-neutral-850 px-4 py-3 " {...props} >
        <option value="">Choose a Genre</option>
        {list.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </label>
  );
}
