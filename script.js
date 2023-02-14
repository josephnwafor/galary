let Images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg'];
i = 0


function load() {
    let imgBox = document.getElementById('imgs');
    imgBox.innerHTML = ''
    for (let i = 0; i < Images.length; i++) {
        const imag = Images[i];

        imgBox.innerHTML += `
		<div class="imgbox" >
            <img onclick="openImage(${i})" src="${imag}" alt="">
            
        </div>
		
		`
    }
}

function openImage(i) {
    let imgBox = document.getElementById('imgs');
    load();

    imgBox.innerHTML = `
    <div class="open">
        <img src="${Images[i]}" id="open" alt="">
      <i onclick="goright(${i})" class="right fa-solid fa-chevron-right"></i>
       <i onclick="goleft(${i})" class=" left fa-solid fa-chevron-left"></i>
       <button onclick="closeBtn()" class="btn">X</button>
    `
}


function closeBtn() {
    let imgBox = document.getElementById('imgs');
    imgBox.classList.remove('open');

    load()

}

function goright(i) {
    if (i === Images.length - 1) {
        i = 0
    } else {
        i++
    }

    openImage(i)
}

function goleft(i) {
    if (i === 0) {
        i = Images.length - 1
    } else {
        i--;
    }
    openImage(i)
}