
function toggleUnread(){
    const notification = document.querySelectorAll(".notification")
    const unreadIcon = document.querySelectorAll(".unread-icon")
    notification.forEach(element => {
        console.log(element)
        if(element.classList.contains("unread")){
            element.classList.toggle("unread")
            element.classList.add("read")
            unreadIcon.forEach(e=>{
                e.style.display="none"
            })
        }
    });
}