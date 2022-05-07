const mongoose=require('mongoose');
const Users=require('./users');
const CONNECTION_STRING='mongodb://localhost/testdb'; 

mongoose.connect(
    CONNECTION_STRING,
    ()=>console.log('Mongoose connected'),
    (e)=>console.log(e.message)
);

// Users.find().then((res)=>{console.log(res)});

run()

async function run() {
    try {
        const user=await Users.create({name:'Robin', age: 30});
        // const user=new Users({name:'Robin', age: 30})
        // await user.save()
        console.log(user);
    } catch (error) {
        console.log(error.message)
    }

}