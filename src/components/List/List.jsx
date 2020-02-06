import React from "react";
import style from "./List.module.css";

let List = props => {
  return (
    <div className={`${style.list} col-6`}>
      <div className={style.menu}>
        <div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => props.filterByTitle()}
          >
            сортировка по названию
          </button>
        </div>
        <div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => props.filterByDate()}
          >
            сортировка по дате
          </button>
        </div>
      </div>
      <div className="row">
        {props.books.books.length > 0
          ? props.books.books.map(el => {
              return (
                <div
                  className="col-4"
                  onClick={() => {
                    props.BooksIsPicked(el);
                    props.CancelISBN(false);
                    props.Canceldata(false);
                  }}
                  key={el.id}
                >
                  <div className={style.card}>
                    <div className={style.cardImg}>
                      {" "}
                      <img className={style.img} src={el.img || null} alt="" />
                    </div>
                    <div className={style.cardBody}>
                      <h5 className="card-title">{el.bookTitle}</h5>
                    </div>
                    <div className={style.cardBody}>
                      {el.firstName + " " + el.lastName + " " + el.date}
                    </div>
                  </div>
                </div>
              );
            })
          : undefined}
      </div>
    </div>
  );
};
export default List;
