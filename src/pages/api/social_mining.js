const { connectToDatabase } = require('../../../lib/mongodb');


async function getPosts(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('social_mining')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        // return the error 
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
async function addPost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        db.collection('social_mining').createIndex({"gotrefered":1},{unique:true});
        if(db.collection('social_mining').find({ "gotrefered" : { $exists : true, $not : null } })){
        await db.collection('social_mining').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data details added successfully',
            success: true,
        });
    }
} 
     catch (error) { 
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}