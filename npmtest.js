const f = require('figlet')
f('HAHAHAHAH', function(err,data){
    if(err){
        print(err)
        return;
    }
    console.log(data)
})