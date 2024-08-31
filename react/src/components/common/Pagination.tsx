import { PaginationProps } from "../../types/props";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div className="flex justify-center items-end mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => paginate(i + 1)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-[#3E5C33] text-white" : "bg-[#8AA86E]"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
