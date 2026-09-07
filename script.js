const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "☀️ Light Mode";
    }
    else{
        btn.innerHTML = "🌙 Dark Mode";
    }
});

// Simulate follower growth
let followers = 12450;
const followerText = document.getElementById("followers");

setInterval(() => {
    followers += Math.floor(Math.random() * 5);
    followerText.textContent = followers.toLocaleString();
}, 3000);