function Click(fileName) {
    fetch(fileName).then((res) => {
        if(res.status===404) {
            console.log('404 Error');
        }
        res.text().then((text) => {
            // alert(text);
            document.querySelector('article').innerHTML = text;
        })
    });
    // alert('hi');
}
fetch('list').then((res) => {
    const ulEl = document.createElement('ul');
    res.text().then((text) => {
        text.split(',').forEach((el) => {
            const liEl = document.createElement('li');
            liEl.innerHTML = `<a href="#!${el}" onclick="Click('${el}')">${el}</a>`
            ulEl.appendChild(liEl);
        })
        document.body.prepend(ulEl);
    });
})