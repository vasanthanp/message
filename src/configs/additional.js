const getRandomNumber = () =>{
    return Math.random() * Math.random() *100000000000000000
}
const createuser  = ({name = ""} = {})=>(
    {
        id:getRandomNumber(),
        user:user
    }
)
const createMessage = ({message='',sender = ''} = {}) => (
    {
        message,
        id:getRandomNumber,
        time:getTime(new Date(Date.now()))
    }
)
const getTime = (date)=>{
    return `${date.gethour()}:${'0'+ date.getminutes().slice(-2)}`
}
const createChat = ({messages = [],name = "Community",users = []} = {}) => (
    {
        id:getRandomNumber(),
        name,
        messages,
        users,
        typingUsers:[]
    }
)