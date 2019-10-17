import {firebaseApp} from "../../Config/Firebase/Firebase";






//  Resturant Signup

const ResturentSignUp = (data, path) => {
    
console.log(data,8989)

    return dispatch => {


            navigator.geolocation.getCurrentPosition((position) => {
                data.location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
         
            console.log(data, 'check')

            firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.check = res.user.emailVerified
                data.account = 'resturant'
                firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(

                    firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                        console.log(`Email Sent ==>`)
                        dispatch({ type: 'addResturant' })
                        // Email sent.
                        path.push('/')
                        dispatch({ type: 'addResturant' })

                    })
                )
            }).catch((err) => {
               console.log(err)

            })

    }



}




//  User Signup


const UserSignUp = (data, path) => {

    return dispatch => {
        console.log(data)
        if (data.password === data.confirmPassword) {
            firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.account = 'user'
                firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(
                    firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                        dispatch({ type: 'addUser' })
                        // Email sent.
                        path.push('/')

                    })
                )
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            alert('password no match')
            
        }

    }
}




const Login = (data, path) => {
    console.log(path,'ss')

    return dispatch => {
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user)
            if (resolve.user.emailVerified === true) {

                firebaseApp.firestore().collection('users').doc(resolve.user.uid).get().then(res => {
                    let checkData = res.data()
                    localStorage.setItem('user', JSON.stringify(checkData))
                    if (checkData.account == 'resturant account') {
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })
                        path.push('/res-dashboard')
                    } else {
                        path.push('/dashbord')
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })

                    }
                })

            }
            else {
                path.push('/verify-email')
            }


        }).catch((err) => {
           alert(err.message)
        })
    }
}




// Logout

const LogOut = (path)=>{

    return dispatch=>{
        firebaseApp.auth().signOut().then(function() {
            dispatch({type:'logout'})
            path.push('/')
          }, function(error) {
            console.error('Sign Out Error', error);
        });

    }

}
const GetProducts = (user) => {
    console.log(user)
    return dispatch => {
        firebaseApp.firestore().collection('Products').where('ResturentName', "==", user.name).get().then((res) => {
                dispatch({type:'empty'})
            res.forEach(doc => {
               let data = doc.data()
               data.id= doc.id
               dispatch({ type: 'getData', payload: data })
            })

        })
    }
}


const deleteProduct = (val,i)=>{
    console.log(val,i)
    return dispatch =>{
        firebaseApp.firestore().collection('Products').doc(val.id).delete().then(
            // this.props.products.splice(i, 1)
            dispatch({type:'deleteProduct',payload:i})
        )
    }
    
}


const AddProduct = (data, tags) => {
    data.tad = tags

    return dispatch => {

        firebaseApp.firestore().collection('Products').add(data).then(
            dispatch({
                type: "addProduct",
                payload: data
            })

        )
    }

}


// User Section

const AllProducts = ()=>{
    return dispatch => {
        firebaseApp.firestore().collection('Products').get().then((res) => {
            dispatch({type:'empty'})
            res.forEach(doc => {
               let data = doc.data()
               data.id= doc.id               
               dispatch({ type: 'allProduct', payload: data })
            })

        })
    }

}



export {
    ResturentSignUp,
    UserSignUp,
    Login,
    LogOut,
    AddProduct,
    GetProducts,
    deleteProduct,
    AllProducts
}