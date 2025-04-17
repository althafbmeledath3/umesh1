

let posts = document.getElementById('posts')
let str = ""

let username = document.getElementById('username')
let profile_pic = document.getElementById('profile_pic')
async function loadPosts() {
    try {
        const response = await fetch("http://localhost:8080/api/loadPosts", {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        });

        // console.log("Raw Response:", response);

        const data = await response.json();
        console.log("Response JSON:", data.posts,data.userData._id);

        

        if (response.status === 200) {


            localStorage.setItem('id',data.userData._id)
            let str = "";

            data.posts.forEach(element => {
                str += `
                  <div class="post-section">
                    <div class="post-header">
                      <img
                        src="${element.user?.profile_pic || 'default.jpg'}"
                        alt="User"
                      />
                      <strong>${element.user?.username || 'Unknown'}</strong>
                    </div>
              
                    <img
                      class="post-image"
                      src="${element.post || 'default.jpg'}"
                      alt="Post Image"
                    />
              
                    <div class="post-description">
                      ${element.description}
                    </div>
                  </div>
                `;
              });
              
            profile_pic.src = data.userData.profile_pic;
            posts.innerHTML = str;
            username.textContent = `Welcome ${data.userData.username}`;
        } else {
            console.error('Invalid response structure:', data);
        }

    } catch (err) {
        console.log('Error:', err);
    }
}



loadPosts()

//signout

function signout() {

    alert("Signing Out")
    localStorage.removeItem("token");
    window.location.href = "/login.html"

}


