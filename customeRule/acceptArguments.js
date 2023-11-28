module.exports={

    // meta:{
    //     type:"problem",
    //     docs:{
    //         description:"enforce the valriable name foo can only assign value test",

    //     },
    //     fixable:"code",
    //     schema:[]
    // },

    create(context){
        // var isDouble = (context.options[0] === "double");
        // console.log(console.log(context.options))

        // if(context.option.indexof())
        const findcommetns=(commnets,node)=>{

            if(context.options.indexOf(commnets)>-1){
                context.report({
                        node:node,
                        message:`please dont use ${commnets} comments `
                                  })

                    }     
    }
            
        return{
            Program(node){
                const comm=context.getSourceCode()
                var arrayofcomments=comm.getAllComments()
                for(var i=0;i<arrayofcomments.length;i++){
                   
                     findcommetns(arrayofcomments[i].value.trim(),node);
                    // array.push(arrayofcomments[i].value);

        }
               
            }
          
        }
    }
}