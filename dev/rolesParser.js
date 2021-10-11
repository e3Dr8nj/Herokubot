




/*
exports.getRoleArr=async(client,message,count,keyWord)=>{try{
     
     let roles_arr=[];
     let bool=false;
     let roles_arr2= await message.guild.roles.cache;
     let pos=[];
     roles_arr2.map(r=>{if(r.name==keyWord){ pos.push(r.position);}; return;});
         console.log('primitive '+pos);
     pos = pos.sort(function(a, b){return a-b}).reverse();
         console.log('sorted '+pos);
     roles_arr2.map( r=>{
               if(r.position<pos[0]&&r.position>pos[1]){bool=true;};
               if(bool) {roles_arr.push(r); }   
               bool=false;        
                             });
     roles_arr = roles_arr.sort(function(a, b){return a.position-b.position}).reverse();//---
     module.exports.system.temple.roles_arr_id=await roles_arr.map(r=>r.id);
     roles_arr = roles_arr.slice(count[0],count[1]);
     
     return  roles_arr;
}catch(err){console.log(err);};};//getRoleArr end;
 */
 exports.roles = {
    get:getRoles
    ,getIds:getRolesIds
    ,slice:RolesSlice

 }
let getRoles=async(serverRoles,keyWord)=>{try{
     
     //keyWord = divider word in list of guild`s roles
    let roles_arr=[];
    let bool=false;
   // let roles_arr2= await guild.roles.cache;
   let roles_arr2= serverRoles;
    let pos=[];
    roles_arr2.map(r=>{if(r.name==keyWord){ pos.push(r.position);}; return;});
        console.log('primitive '+pos);
    pos = pos.sort(function(a, b){return a-b}).reverse();
        console.log('sorted '+pos);
    roles_arr2.map( r=>{
              if(r.position<pos[0]&&r.position>pos[1]){bool=true;};
              if(bool) {roles_arr.push(r); }   
              bool=false;        
                            });
    roles_arr = roles_arr.sort(function(a, b){return a.position-b.position}).reverse();//---
  // module.exports.system.temple.roles_arr_id=await roles_arr.map(r=>r.id);
  //  roles_arr = roles_arr.slice(count[0],count[1]);
    
    return  roles_arr;
}catch(err){console.log(err);};};//getRoleArr end;

let.getRolesIds=async(varToHold,roles_arr)=>{try{
    //varToHold=variable to wrie roles ids
  varToHold=await roles_arr.map(r=>r.id);
 
     return;
}catch(err){console.log(err);};};//getRoleArr end;
 
let.RolesSlice=async(count,roles_arr)=>{try{
    
 //cunt = [startvalue,endvalue]
   roles_arr = roles_arr.slice(count[0],count[1]);
     return;
}catch(err){console.log(err);};};//getRoleArr end;