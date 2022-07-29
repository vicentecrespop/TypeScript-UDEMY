import mongoose from 'mongoose'
import config from 'config'
import Logger from './logger'


async function connect() {
    const dbUri = config.get<string>('dbUri')
    
    try {
        await mongoose.connect(dbUri)
        Logger.info('Conectado ao MongoDB com sucesso!')
    }  catch(e) {
        Logger.error('Não foi possível conectar ao Banco de Dados.')
        Logger.error(`Error: ${e}`)
        process.exit(1)
    }
}

export default connect