module.exports={

    meta:{
        type:"problem",
        docs:{
            description:"enforce the valriable name foo can only assign value test",

        },
        fixable:"code",
        schema:[]
    },
    
    create(context){
        return {
            CallExpression(node){
                if(node.callee.name==="getpayment"){
                    context. report({
                        node:node,
                        message:"getpayment is deprected: {{ identifier }}",
                        data:{
                             identifier:node.name 
                        }
                    })
                }
            }

        }
    }
}