var conn = require('../conn');
var GuestCart = {1 : 3,
    2 : 4 ,
    3 : 5 ,
    };  // id , amount
exports.getListCart = async (userID) =>{
    if(userID == ''){
        return GuestCart;
    }
    else{
     //   const result = await conn.query(`select bookID from carts where userID = ${userid}`);
       // var listID = JSON.parse(JSON.stringify(result[0]));
    }
}

exports.Addtocart = async (id , userID) => {
    if(userID==''){
        if ( GuestCart.hasOwnProperty(id)){
            GuestCart[id]++;
        }
        else{
            GuestCart[id] = 1 ;
        }
        
    } 
}
exports.setListCart = (id,number) => {
    if(GuestCart.hasOwnProperty(id)){ 
        GuestCart[id] = number; 
        if(number==0){delete GuestCart[id]; }
    }
    console.log("set");
}