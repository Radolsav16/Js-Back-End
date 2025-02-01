const options = [
    {value:'tv-show',label:'TV Show'},
    {value:'animation',label:'Animation'},
    {value:'movie',label:'Movie'},
    {value:'documentary',label:'Documentary'},
    {value:'short-film',label:'Short Film'}

]


function select(selectedCategory){
    const result = options.map(obj => {
        if(obj.value === selectedCategory){
            return ({value:obj.value,label:obj.label,selected:"selected"});
        } else{
            return ({value:obj.value,label:obj.label})
        }
    })

    return result;
}


export {
    select
}