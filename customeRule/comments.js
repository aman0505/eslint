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

        const findcommetns=(node)=>{
            const comm=context.getSourceCode()
            var arrayofcomments=comm.getAllComments()
            // console.log(context.filename)
            for(var i=0;i<arrayofcomments.length;i++){
                 if(arrayofcomments[i].value.trim()=="payment 1"){
        context.report({
                         node:node,
                           message:`dont use "payment 1" comment {{identifier}}`,
                           data:{
                                identifier:node.name
                            } 
                        })
        
                   }
                 }

        }
        return{
            Program(node){
                findcommetns(node);
            }
          
        }
    }
}