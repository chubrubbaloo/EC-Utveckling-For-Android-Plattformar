import * as SQLite from 'expo-sqlite';
import Movie from '../../models/Movie';

const db = SQLite.openDatabase("movies.db");

export const initDB = () => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS movies (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                rating INTEGER NOT NULL,
                genre TEXT NOT NULL,
                director TEXT NOT NULL)`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })

}

export const getTableInfo = () => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `pragma table_info('movies')`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })

}

export const insert = (movie) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO movies (title, rating, genre, director)
                VALUES (?,?,?,?)`, [movie.title, movie.rating, movie.genre, movie.director],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `SELECT * FROM movies`, [],
                (tx, res) => resolve(
                    res.rows._array
                        .map(movie => new Movie(movie.id, movie.title, movie.rating, movie.genre, movie.director))),
                (tx, err) => reject(err)
            )
        })
    })
}

export const deleteById = (id) => {

    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `DELETE FROM movies WHERE id = ?`, [id],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })

    })

}


