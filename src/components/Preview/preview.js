import React from 'react';
import style from './preview.module.css'
import FormPreview from './FormPreview';

let Preview = (props) => {
    return (
        <div className={`col-6 ${style.main}`}>
            {!props.books.editMode ? <div className={`${style.preview} `} >
                <div className={`${style.img}  col-4`}>
                    <img src={props.books.chosenBooks.img} alt=''></img>
                </div>
                <div className={`${style.info} col-6`}>
                    <div className={style.title}>
                        <h4>Название</h4>
                        {props.books.chosenBooks.bookTitle}
                    </div>
                    <div className={style.autor1}>
                        <h4>Автор</h4>
                        {props.books.chosenBooks.firstName + ' ' + props.books.chosenBooks.lastName}
                    </div>
                    {props.books.chosenBooks.firstName2
                        || props.books.chosenBooks.firstName3
                        || props.books.chosenBooks.lastName2
                        || props.books.chosenBooks.lastName3 ?
                        < div className={style.autor1}>
                            <h4>Соавторы</h4>
                            {props.books.chosenBooks.firstName2 ?
                                props.books.chosenBooks.firstName2 + " "
                                : ''
                            }
                            {props.books.chosenBooks.lastName2 ?
                                props.books.chosenBooks.lastName2
                                : ''
                            }
                            <br />
                            {props.books.chosenBooks.firstName3 ?
                                props.books.chosenBooks.firstName3 + " "
                                : ''
                            }
                            {props.books.chosenBooks.lastName3 ?
                                props.books.chosenBooks.lastName3 + " "
                                : ''
                            }
                        </div>
                        : undefined}
                    <div className={style.date}>
                        <h4>Год издания </h4> {props.books.chosenBooks.date} </div>
                    <div className={style.ISBN}>
                        <h4>ISBN</h4>
                        {props.books.chosenBooks.ISBN}</div>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={() => {
                        props.editModePreview(true);
                    }}>Редактировать</button>
                    <button className='btn btn-danger' onClick={() => {
                        localStorage.removeItem(props.books.chosenBooks.id)
                        props.DeleteBook(props.books.chosenBooks.id)
                        props.BooksIsPicked()
                    }}>Удалить</button>
                </div>
            </div>
                : <FormPreview {...props} />
            }
        </div >
    )
}

export default Preview