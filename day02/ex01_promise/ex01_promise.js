function task1(fullfilled, reject) {
    console.log('Task1 시작');
    let num = 0;
    setTimeout(function() {
        num = 1004;
        fullfilled('Task1 결과', num);
    }, 300);
    console.log('Task1 끝', num);
}

function fullfilled(result, num) {
    console.log('fullfiled : ', result.data, result.num);
}

function rejected(err) {
    console.log('rejected : ', err);
}

new Promise(task1).then(fullfilled, rejected);

