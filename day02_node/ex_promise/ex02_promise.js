new Promise((fullfill) => {
    console.log('l. Task1 시작', this);
    let num = 0;
    setTimeout(() => {
        let num = 1004;
        fullfill({data: '3. Task1 결과', num});
    }, 300);
    console.log('2. Task 끝', num);
}).then((result) => {
    console.log('fullfiled 함수 :', result.data, result.num);
})