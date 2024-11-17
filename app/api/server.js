import jsonServer from 'json-server'

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/messages': '/messages',
    '/api/messages/:id': '/messages/:id',
    '/api/messages/user/:userId': '/messages?userId=:userId'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})


module.exports = server
