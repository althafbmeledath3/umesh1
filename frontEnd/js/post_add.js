

// let post = ""
// document.getElementById('post').addEventListener('change',async(e)=>{
//     const post_img = e.target.files[0]
//     post = await convertBase64(post_img)
//     document.getElementById('preview').innerHTML = `<img width="200px" height="auto" src=${post}></img>`
// })



// async function addPost(e){

//     e.preventDefault()

//     const description = document.getElementById('description').value

//     let data = {post,description}


//     let options = {
//         headers:{"Content-Type":"application/json"},
//         method:"POST",
//         body:JSON.stringify(data)
//     }

//     try{


//         const response = await fetch('/api/addPost',options)

//         const data = await response.json()

//         if(response.status===201){

//             alert(data.message)

//             window.location.href = "/"
//         }

//         else{

//             alert(data.message)
//         }

//     }

//     catch(err){

//         console.log(err)
//         alert(data.message)
//     }

    

// }


// //convert image to base64
// function convertBase64(file){

//     return new Promise((resolve,reject)=>{
//         //create object of file reader class
//         const fileReader = new FileReader()
//         fileReader.readAsDataURL(file)

//         //when reading is done
//         fileReader.onload = ()=>{
//             resolve(fileReader.result)
//         }

//         //if error then reject with error
//         fileReader.onerror = ()=>{
//             reject(fileReader.error)
//         }
//     })
// }


let post = "";

// Preview the selected image
document.getElementById('post').addEventListener('change', async (e) => {
    const post_img = e.target.files[0];
    post = await convertBase64(post_img);
    // Use `post` here, not `element.post[0]`
    console.log(post)
    document.getElementById('preview').innerHTML =
      `<img width="200px" height="auto" src="${post}" alt="Preview">`;
});

async function addPost(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const userId = localStorage.getItem('id');

    if (!post || !description || !userId) {
        alert("Please select an image, enter a description, and make sure you're logged in.");
        return;
    }

    const payload = { post, description, userId };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload),
    };

    try {
        // Call the API with the userId in the URL
        const response = await fetch(`/api/addPost/${userId}`, options);
        const data = await response.json();

        if (response.status === 201) {
            alert(data.message);  // Success message
            window.location.href = "/index.html"; // Redirect after successful post upload
        } else {
            alert(data.message);  // Error message
        }
    } catch (err) {
        console.error(err);
        alert('Error uploading post');
    }
}


// Utility to convert file → Base64 string
function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()  => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
    });
}

// Make sure your form calls addPost on submit, e.g.:
// <form onsubmit="addPost(event)">…</form>
