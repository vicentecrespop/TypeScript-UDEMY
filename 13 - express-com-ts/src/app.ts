// 1 - iniciando o projeto
// console.log('Express + TS!!')

// 2 - init express
import { Console } from 'console'
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'

const app = express()

// 3 - rotas com express
app.use(express.json())

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

app.get('/', (req, res) => {
    return res.send('Hello Express!')
})

// 3 - rotas com express
app.post('/api/product', (req, res) => {
    console.log(req.body)

    return res.send('Produto adicionado com sucesso!')
})

// 4 - rota para todos os verbos
app.all('/api/product/check', (req, res) => {
    // req.method = Verbo HTPP

    if(req.method === 'POST') {
        return res.send('Inseriu algum dado')
    } else if(req.method === 'GET') {
        return res.send('Leu algum registro!')
    } else {
        return res.send('Não podemor realizar esta operação!')
    }
})

// 5 - interfaces do express
app.get('/api/interfaces', (req: Request, res: Response) => {
    return res.send('Utilizando as interfaces.')
})

// 6 - enviando json
app.get('/api/json', (req: Request, res: Response) => {
    return res.json({
        'name': 'Shirt',
        'price': 49.99,
        'color': 'BLUE',
        'sizes': ['P', 'M', 'G']
    })
})

// 7 - router parameters
app.get('/api/product/:id', (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if(id === '1') {
        const product = {
            'name': 'Camiseta',
            'price': 80.99,
            'color': 'Black'
        }
        return res.json(product)
    } else {
        return res.send('Produto não encontrado!')
    }
})

// 8 - rotas mais complexas
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
    console.log(req.params)

    const productId = req.params.id
    const reviewId = req.params.reviewId

    return res.send(`Acessando a review ${reviewId} do produto ${productId}.`)
})

// 9 - router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuario com id: ${req.params.id}`)

    return res.send('O usuário foi encontrado!')
}

app.get('/api/user/:id', getUser)

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if(req.params.id === '1') {
        console.log('Acesso permitido.')
        next()
    } else {
        return res.send('Acesso negado!')
        
    }
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
    return res.json({msg: 'Bem vindo a área administrativa'})
})

// 12 - interfaces de req e res
app.get('/api/user/:id/details/:name', 
    (req: Request<{id: number, name: string}>, 
     res: Response<{status: boolean}>) => {
        console.log(req.params.id)
        console.log(req.params.name)

        return res.json({status: true})
     })

// 13 - tratando erros
app.get('/api/error', (req: Request, res: Response) => {
    try {
        // a nossa lógica
        throw new Error('Algo deu errado!')
    } catch(e: any) {
        return res.status(500).json({error: e.message})
    }
})

app.listen(3000, () => {
    console.log('Express está rodando...')
})