const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center px-2 py-4 join">
      {page > 1 && (
        <button onClick={handlePrevPage} className="join-item btn">
          «
        </button>
      )}

      <button className="join-item btn">
        {page} of {lastPage}
      </button>
      {lastPage && (
        <button onClick={handleNextPage} className="join-item btn">
          »
        </button>
      )}
    </div>
  );
};

export default Pagination;
