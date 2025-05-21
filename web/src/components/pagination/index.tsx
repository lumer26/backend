import style from './style.module.css'

export function Pagination() {
  return (
    <div className={style.pagination}>
      <div className={style.countPerPage}>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className={style.pages}>
        <button className="prev">Prev</button>
        <button>
          <span className="currentPage">1</span>
        </button>
        <button className="next">Next</button>
      </div>
    </div>
  )
}
