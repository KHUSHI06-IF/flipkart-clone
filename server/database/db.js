import mongoose from 'mongoose' ;

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.6qts4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` ;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error)
     {
        console.log('Error: ', error.message);
    }

};

export default Connection;