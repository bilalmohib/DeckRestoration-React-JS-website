import firebase from '../../firebase'

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })
    }
}


const setCurrentKey = (data) => {
  //  console.log("The key is: ", key)
    return (dispatch) => {
        dispatch({ type: "SETCURRENTKEY", data: data })
    }
}

const setBlogCategory = (data) => {
    //  console.log("The key is: ", key)
      return (dispatch) => {
          dispatch({ type: "SETCATEGORYBLOG", data: data })
      }
  }

const setSelectedCategory =(c) =>{
    console.log("The selected category is : ",c)
    return (dispatch)=>{
        dispatch({type:"SETSELECTEDCATEGORY",data:c})
    }
}




const get_Blog_all_data = () => {
    return (dispatch) => {

        let users = [];
        firebase.database().ref(`Blog/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                users.push(data.val())
            })
        
            dispatch({ type: "GETBLOGDATA", data: users }) 
            //console.log(users)
        })        
    }
}



export {
    set_data,
    get_Blog_all_data,
    setCurrentKey,
    setSelectedCategory,
    setBlogCategory
}