## Luôn được gọi sau khi component được mouse

## xử lý site effect (gọi api, ....)

### 1. moi lan deu re render lai

### 2. Goi sau rkhi them vao dom, goi lai moi khi components re render.

useEffect(() => {
const fetchPost = async () =>{
try{
const response = await axios.get(
`https://jsonplaceholder.typicode.com/posts`
);
setPost(response.data);
}catch(error){
console.error("Loi khi fetch du lieu", error);
}
};
fetchPost();
},[]);

### phan [] Goi mot lan khi component duoc mousre (no duoc them vao DOM)

### dung để:

## memo su dung prop ......................................
