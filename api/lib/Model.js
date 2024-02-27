const jsonServer = require("./jsonServer");
const db = jsonServer.db;

/**
 * Represents a Model class for interacting with a database.
 */
class Model {
  #DATABASE_NAME;

  /**
   * Creates an instance of the Model class.
   * @param {string} dbName - The name of the database.
   */
  constructor(dbName) {
    this.#DATABASE_NAME = dbName;
  }

  /**
   * Creates a new user in the database.
   * @param {object} user - The user object to be created.
   * @returns {object} - The newly created user object.
   */
  create(data) {
    try {
      db.get(this.#DATABASE_NAME).push(data).write();
      return data;
    } catch (e) {
      throw new Error("Data created");
    }
  }

  /**
   * Finds a user in the database by email.
   * @param {string} email - The email of the user to be found.
   * @returns {object} - The found user object.
   * @throws {Error} - If the user is not found.
   */
  findUserByEmail(email) {
    const user = db.get(this.#DATABASE_NAME).find({ email: email?.trim() }).value();
    return user;
  }

  /**
   * Finds a user in the database by ID.
   * @param {string} id - The ID of the user to be found.
   * @returns {object} - The found user object.
   * @throws {Error} - If the user is not found.
   */
  findById(id) {
    const user = db.get(this.#DATABASE_NAME).find({ id }).value();
    return user;
  }

  /**
   * Retrieves all users from the database.
   * @returns {Array} - An array of user objects.
   */
  findAll() {
    return db.get(this.#DATABASE_NAME).value();
  }

  /**
   * Finds records in the database based on the provided query.
   * @param {Object} query - The query object used to filter the records.
   * @returns {Array} - An array of records matching the query.
   */
  find(query) {
    return db.get(this.#DATABASE_NAME).find(query).value();
  }

  /**
   * Filters the data in the database based on the provided query.
   * @param {Object} query - The query object used to filter the data.
   * @returns {Array} - An array of filtered data.
   */
  filter(query) {
    return db.get(this.#DATABASE_NAME).filter(query).value();
  }

  /**
   * Updates a user in the database by ID.
   * @param {string} id - The ID of the user to be updated.
   * @param {object} user - The updated user object.
   * @returns {object} - The updated user object.
   */
  updateById(id, user) {
    const newUser = db.get(this.#DATABASE_NAME).updateById(id, Object.assign({}, user)).write();
    return newUser;
  }

  /**
   * Updates a user in the database based on a query.
   * @param {object} query - The query object to find the user to be updated.
   * @param {object} data - The updated data for the user.
   * @returns {object} - The updated user object.
   */
  updateOne(query, data) {
    const newUser = db.get(this.#DATABASE_NAME).find(query).assign(data).write();
    return newUser;
  }

  /**
   * Deletes a user from the database by ID.
   * @param {string} id - The ID of the user to be deleted.
   * @returns {object} - The deleted user object.
   */
  deleteById(id) {
    const deletedUser = db.get(this.#DATABASE_NAME).remove({ id }).write();
    return deletedUser;
  }

  /**
   * Deletes a user from the database based on a query.
   * @param {object} query - The query object to find the user to be deleted.
   * @returns {object} - The deleted user object.
   */
  deleteOne(query) {
    const deletedUser = db.get(this.#DATABASE_NAME).remove(query).write();
    return deletedUser;
  }

  /**
   * Deletes all users from the database.
   * @returns {Array} - An array of deleted user objects.
   */
  deleteAll() {
    const deletedUsers = db.get(this.#DATABASE_NAME).remove().write();
    return deletedUsers;
  }
}

module.exports = Model;
