const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wypuy4n.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development'
}