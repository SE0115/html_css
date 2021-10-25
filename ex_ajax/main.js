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
