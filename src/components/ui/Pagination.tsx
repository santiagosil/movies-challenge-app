import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";

interface PaginationProps {
  totalPages: number;
  page: number;
}
function Pagination({totalPages, page}: PaginationProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === 0) return pathName;
    params.set("page", pageNumber.toString());

    if (pageNumber >= totalPages) {
      params.set("page", totalPages.toString());

      return `${pathName}?${params.toString()}`;
    }

    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="col-span-5 mx-auto flex w-56 flex-col items-center">
      <div className="text-center">
        page {page} of {totalPages}
      </div>
      <div className="xs:mt-0 mt-2 inline-flex space-x-2">
        <Link
          className="flex h-8 items-center justify-center rounded-s bg-neutral-800 px-3 text-sm font-medium text-white hover:bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-500"
          href={createPageUrl(page - 1)}
        >
          <svg
            aria-hidden="true"
            className="me-2 h-3.5 w-3.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5H1m0 0 4 4M1 5l4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Prev
        </Link>

        <Link
          className="flex h-8 items-center justify-center rounded-s bg-neutral-800 px-3 text-sm font-medium text-white hover:bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-500"
          href={createPageUrl(page + 1)}
        >
          Next
          <svg
            aria-hidden="true"
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
