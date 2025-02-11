export default function getErrorMessage(err){
    console.log(err.name)
    switch(err.message){
        case 'ValidationError':return Object.values(err.erors.message).at(0);
        default:return err.messages
    }
}