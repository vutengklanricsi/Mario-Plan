const functions = require('firebase-functions');
const admin = require('firebase-admin') //
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp(functions.config().firebase) // inicializáljuk az admin-t, ezzel tudunk hozzzáférni az authentikáció service-hez és a firestore service-hez

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello Ninjas!");
});

const createNotification = (notification) => {
  return admin.firestore().collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log('notification added', doc)
    })
}

exports.projectCreated = functions.firestore
.document('projects/{projectId}')
.onCreate(doc => {
  
  const project = doc.data();
  const notification = {
    content: 'Added  new project',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp() 
  }
  return createNotification(notification)
})
