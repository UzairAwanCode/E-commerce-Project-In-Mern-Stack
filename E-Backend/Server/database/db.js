import mongoose from "mongoose";



const Connection = async(username, password)=>{
    // const Url = `mongodb://${username}:${password}@ac-bnrt7by-shard-00-00.hg5azx3.mongodb.net:27017,ac-bnrt7by-shard-00-01.hg5azx3.mongodb.net:27017,ac-bnrt7by-shard-00-02.hg5azx3.mongodb.net:27017/E-COMMERCE?ssl=true&replicaSet=atlas-10tx6v-shard-0&authSource=admin&retryWrites=true&w=majority`
    const Url = `mongodb://${username}:${password}@ac-o6dpzff-shard-00-00.yesqn2o.mongodb.net:27017,ac-o6dpzff-shard-00-01.yesqn2o.mongodb.net:27017,ac-o6dpzff-shard-00-02.yesqn2o.mongodb.net:27017/E-COMMERCE?ssl=true&replicaSet=atlas-3maof0-shard-0&authSource=admin&retryWrites=true&w=majority`
    // const Url = `mongodb://${username}:${password}@ac-bnrt7by-shard-00-00.hg5azx3.mongodb.net:27017,ac-bnrt7by-shard-00-01.hg5azx3.mongodb.net:27017,ac-bnrt7by-shard-00-02.hg5azx3.mongodb.net:27017/E-COMMERCE?ssl=true&replicaSet=atlas-10tx6v-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(Url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database Connected Successfully')
    }
    catch(error){
        console.log('Database Connection Failed') 
    }
}

export default Connection