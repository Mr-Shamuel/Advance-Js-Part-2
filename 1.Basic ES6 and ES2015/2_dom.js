// const handleBorder=()=>{
// alert("wowo")
// }

function handleBorder() {
    const border = document.getElementById('container');
    border.style.border = '7px dotted red';
}
//  add background 
document.getElementById('background').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend-name');
    for (i of friends) {
        i.style.background = 'green';

    }
})

//handle Add friend 

const handleAddFriend = () => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('friend');
    newdiv.innerHTML = `<h3 class="friend-name">friend-3</h3>
    <p>Unde, dignissimos.</p>`

    document.getElementById('container').appendChild(newdiv);

}

